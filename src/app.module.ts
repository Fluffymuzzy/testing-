import { Module } from "@nestjs/common";
import { AuthorService } from "./author/author.service";
import { AuthorController } from "./author/author.controller";
import { AuthorModule } from "./author/author.module";
import { PrismaService } from "./prisma/prisma.service";
import { BookController } from "./book/book.controller";
import { BookService } from "./book/book.service";
import { BookModule } from "./book/book.module";

@Module({
  imports: [AuthorModule, BookModule],
  controllers: [AuthorController, BookController],
  providers: [AuthorService, PrismaService, BookService],
  exports: [PrismaService],
})
export class AppModule {}
