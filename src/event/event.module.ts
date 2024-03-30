import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './models/event.models';
import { FileModule } from '../file/file.module';

@Module({
  // imports: [SequelizeModule.forFeature([Venue_photo, Venue]), FileModule],

  imports: [SequelizeModule.forFeature([Event]),FileModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
