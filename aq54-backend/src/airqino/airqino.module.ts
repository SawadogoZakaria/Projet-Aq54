import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AirqinoService } from './airqino.service';
import { AirqinoController } from './airqino.controller';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [AirqinoService],
  controllers: [AirqinoController],
  exports: [AirqinoService],
})
export class AirqinoModule {}