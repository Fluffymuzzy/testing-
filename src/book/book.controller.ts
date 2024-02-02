import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/createBookDto";
import { FindBooksDto } from "./dto/findBooks.dto";
import { UpdateBookDto } from "./dto/updateBookDto";

@Controller("book")
export class BookController {
  constructor(private bookService: BookService) {}
  // -------------------------------------------------------------
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  // -------------------------------------------------------------
  @Get()
  findAll(@Query() findBooksDto: FindBooksDto) {
    return this.bookService.findAll(findBooksDto);
  }
  // -------------------------------------------------------------
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }
  // -------------------------------------------------------------
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookService.remove(id);
  }
}
