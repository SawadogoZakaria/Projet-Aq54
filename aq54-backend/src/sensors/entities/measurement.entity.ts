import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Sensor } from './sensor.entity';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sensor, sensor => sensor.measurements)
  sensor: Sensor;

  @CreateDateColumn()
  timestamp: Date;

  @Column('float')
  pm25: number;

  @Column('float')
  pm10: number;
}