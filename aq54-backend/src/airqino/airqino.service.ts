import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; 
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AirqinoService {
  private readonly apiUrl: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiUrl = 'https://airqino-api.magentalab.it';
  }

  async getCurrentValues(stationName: string) {
    const url = `${this.apiUrl}/getCurrentValues/${stationName}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getHourlyAvg(stationName: string, dtFrom: string, dtTo: string) {
    const url = `${this.apiUrl}/getHourlyAvg/${stationName}/${dtFrom}/${dtTo}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getLastValuesRaw(stationName: string) {
    const url = `${this.apiUrl}/getLastValuesRaw/${stationName}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getRange(stationName: string, dtFrom: string, dtTo: string) {
    const url = `${this.apiUrl}/getRange/${stationName}/${dtFrom}/${dtTo}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getSessionInfo(projectName: string) {
    const url = `${this.apiUrl}/getSessionInfo/${projectName}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getSingleDay(stationName: string, dtFrom: string) {
    const url = `${this.apiUrl}/getSingleDay/${stationName}/${dtFrom}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getStationStatus(stationId: string) {
    const url = `${this.apiUrl}/getStationStatus/${stationId}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getStations(projectName: string) {
    const url = `${this.apiUrl}/getStations/${projectName}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }

  async getStationHourlyAvg(stationId: string) {
    const url = `${this.apiUrl}/v3/getStationHourlyAvg/${stationId}`;
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}