// src/sensors/sensors.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Sensor } from './entities/sensor.entity';
import { Measurement } from './entities/measurement.entity';
import { AirqinoService } from '../airqino/airqino.service';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,
    @InjectRepository(Measurement)
    private measurementRepository: Repository<Measurement>,
    private airqinoService: AirqinoService,
  ) {}

  async findAll(): Promise<Sensor[]> {
    return this.sensorRepository.find();
  }

  async getAggregatedData(sensorId: string, startDate: Date, endDate: Date, aggregationType: 'hourly' | 'daily') {
    if (aggregationType === 'hourly') {
      const data = await this.airqinoService.getHourlyAvg(
        sensorId,
        startDate.toISOString(),
        endDate.toISOString()
      );
      // Traiter et formater les données selon vos besoins
      return data;
    } else {
      // Pour l'agrégation journalière, nous devrons peut-être agréger les données horaires nous-mêmes
      const hourlyData = await this.airqinoService.getHourlyAvg(
        sensorId,
        startDate.toISOString(),
        endDate.toISOString()
      );
      // Implémenter l'agrégation journalière ici
      // ...
    }
  }

  async getCurrentValues(sensorId: string) {
    return this.airqinoService.getCurrentValues(sensorId);
  }

  async getStationStatus(sensorId: string) {
    return this.airqinoService.getStationStatus(sensorId);
  }

  async syncData(sensorId: string, startDate: Date, endDate: Date) {
    const data = await this.airqinoService.getRange(
      sensorId,
      startDate.toISOString(),
      endDate.toISOString()
    );

    const sensor = await this.sensorRepository.findOne({ where: { sensorId } });

    if (!sensor) {
      throw new Error('Sensor not found');
    }

    const measurements = data.map(item => {
      const measurement = new Measurement();
      measurement.sensor = sensor;
      measurement.timestamp = new Date(item.timestamp);
      measurement.pm25 = item.pm25;
      measurement.pm10 = item.pm10;
      // Ajoutez d'autres champs si nécessaire
      return measurement;
    });

    await this.measurementRepository.save(measurements);
  }

  async getStations(projectName: string) {
    return this.airqinoService.getStations(projectName);
  }

  async getSessionInfo(projectName: string) {
    return this.airqinoService.getSessionInfo(projectName);
  }
}