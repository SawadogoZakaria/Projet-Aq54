// src/sensors/sensors.controller.ts
import { Controller, Get, Param, Query } from '@nestjs/common';
import { SensorsService } from './sensors.service';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Get()
  findAll() {
    return this.sensorsService.findAll();
  }

  @Get(':id/data')
  getAggregatedData(
    @Param('id') id: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('aggregationType') aggregationType: 'hourly' | 'daily',
  ) {
    return this.sensorsService.getAggregatedData(
      id,
      new Date(startDate),
      new Date(endDate),
      aggregationType,
    );
  }

  @Get(':id/current')
  getCurrentValues(@Param('id') id: string) {
    return this.sensorsService.getCurrentValues(id);
  }

  @Get(':id/status')
  getStationStatus(@Param('id') id: string) {
    return this.sensorsService.getStationStatus(id);
  }

  @Get(':id/sync')
  syncData(
    @Param('id') id: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.sensorsService.syncData(
      id,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Get('project/:projectName')
  getStations(@Param('projectName') projectName: string) {
    return this.sensorsService.getStations(projectName);
  }

  @Get('project/:projectName/info')
  getSessionInfo(@Param('projectName') projectName: string) {
    return this.sensorsService.getSessionInfo(projectName);
  }
}