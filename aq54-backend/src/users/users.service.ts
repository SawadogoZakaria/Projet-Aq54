import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async create(userData: Partial<User>): Promise<User> {
    const existingUser = await this.usersRepository.findOne({ where: { email: userData.email } });
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    // Assurez-vous que username est présent
    if (!userData.username) {
      throw new ConflictException('Username is required');
    }

    const newUser = this.usersRepository.create(userData);
    return this.usersRepository.save(newUser);
  }
  async update(id: number, userData: Partial<User>): Promise<User> {
    await this.usersRepository.update(id, userData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async activate(id: number): Promise<User> {
    await this.usersRepository.update(id, { isActive: true });
    return this.findOne(id);
  }

  async deactivate(id: number): Promise<User> {
    await this.usersRepository.update(id, { isActive: false });
    return this.findOne(id);
  }

  async login(userData: { email: string; password: string }): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email: userData.email } });
    if (!user) {
      throw new NotFoundException('Utilisateur non trouvé');
    }
  
    // Supprimez la vérification du mot de passe crypté
    // const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Mot de passe incorrect');
    // }
  
    // Vérifiez si le mot de passe est le même (non crypté)
    if (userData.password !== user.password) {
      throw new UnauthorizedException('Mot de passe incorrect');
    }
  

  return user; // Retournez l'utilisateur ou les informations nécessaires
}
}