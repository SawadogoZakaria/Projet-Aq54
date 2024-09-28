import { Controller, Get, Param, Query } from '@nestjs/common';
import { AirqinoService } from './airqino.service';

@Controller('airqino')
export class AirqinoController {
  constructor(private readonly airqinoService: AirqinoService) {}

  @Get('current-values/:stationName')
  async getCurrentValues(@Param('stationName') stationName: string) {
    return this.airqinoService.getCurrentValues(stationName);
  }

  @Get('hourly-avg/:stationName')
  async getHourlyAvg(
    @Param('stationName') stationName: string,
    @Query('dtFrom') dtFrom: string,
    @Query('dtTo') dtTo: string,
  ) {
    return this.airqinoService.getHourlyAvg(stationName, dtFrom, dtTo);
  }

  @Get('last-values-raw/:stationName')
  async getLastValuesRaw(@Param('stationName') stationName: string) {
    return this.airqinoService.getLastValuesRaw(stationName);
  }

  @Get('range/:stationName')
  async getRange(
    @Param('stationName') stationName: string,
    @Query('dtFrom') dtFrom: string,
    @Query('dtTo') dtTo: string,
  ) {
    return this.airqinoService.getRange(stationName, dtFrom, dtTo);
  }

  @Get('session-info/:projectName')
  async getSessionInfo(@Param('projectName') projectName: string) {
    return this.airqinoService.getSessionInfo(projectName);
  }

  @Get('single-day/:stationName')
  async getSingleDay(
    @Param('stationName') stationName: string,
    @Query('dtFrom') dtFrom: string,
  ) {
    return this.airqinoService.getSingleDay(stationName, dtFrom);
  }

  @Get('station-status/:stationId')
  async getStationStatus(@Param('stationId') stationId: string) {
    return this.airqinoService.getStationStatus(stationId);
  }

  @Get('stations/:projectName')
  async getStations(@Param('projectName') projectName: string) {
    return this.airqinoService.getStations(projectName);
  }

  @Get('station-hourly-avg/:stationId')
  async getStationHourlyAvg(@Param('stationId') stationId: string) {
    return this.airqinoService.getStationHourlyAvg(stationId);
  }
}