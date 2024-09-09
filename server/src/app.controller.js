import { Controller, Dependencies, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('number')
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Post()
  postNumber() {
    return this.appService.getNumber();
  }
}
