import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // Aplica el middleware a todas las rutas
  }
}
