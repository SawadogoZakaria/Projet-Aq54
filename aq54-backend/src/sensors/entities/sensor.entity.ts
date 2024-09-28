import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Measurement } from './measurement.entity';

@Entity()
export class Sensor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sensorId: string;

  @Column()
  name: string;

  @Column('point')
  location: string;

  @OneToMany(() => Measurement, measurement => measurement.sensor)
  measurements: Measurement[];
}
