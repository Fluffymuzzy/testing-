import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorService } from './author/author.service';
import { AuthorController } from './author/author.controller';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [AuthorModule],
  controllers: [AppController, AuthorController],
  providers: [AppService, AuthorService],
})
export class AppModule {}
