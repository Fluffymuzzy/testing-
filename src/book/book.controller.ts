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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("app")
@Controller("book")
export class BookController {
  constructor(private bookService: BookService) {}
  // -------------------------------------------------------------
  @Post()
  @ApiOperation({ summary: "Create a new book" })
  @ApiResponse({
    status: 201,
    description: "The book has been successfully created",
  })
  @ApiBody({ type: CreateBookDto })
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  // -------------------------------------------------------------
  @Get()
  @ApiOperation({ summary: "Finds all books or by using a filter" })
  @ApiResponse({ status: 200, description: "Return books" })
  findAll(@Query() findBooksDto: FindBooksDto) {
    return this.bookService.findAll(findBooksDto);
  }
  // -------------------------------------------------------------
  @Patch(":id")
  @ApiOperation({ summary: "Update a book" })
  @ApiResponse({
    status: 200,
    description: "The book has been succesfully updated",
  })
  @ApiParam({ name: "id", description: "Book ID" })
  @ApiBody({ type: UpdateBookDto })
  update(@Param("id") id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }
  // -------------------------------------------------------------
  @Delete(":id")
  @ApiOperation({ summary: "Delete a book" })
  @ApiResponse({
    status: 200,
    description: "The book has been successfully deleted.",
  })
  @ApiParam({ name: "id", description: "Book ID" })
  remove(@Param("id") id: string) {
    return this.bookService.remove(id);
  }
}
