import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorsService } from './sensors.service';
import { SensorsController } from './sensors.controller';
import { Sensor } from './entities/sensor.entity';
import { Measurement } from './entities/measurement.entity';
import { AirqinoModule } from '../airqino/airqino.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sensor, Measurement]),
    AirqinoModule,
  ],
  controllers: [SensorsController],
  providers: [SensorsService],
})
export class SensorsModule {}