import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsModule } from './logs/logs.module';
import { LogsController } from './logs/logs.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), LogsModule],
  controllers: [AppController, LogsController],
  providers: [AppService],
})
export class AppModule {}
