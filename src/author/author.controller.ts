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
import { AuthorService } from "./author.service";
import { CreateAuthorDto } from "./dto/createAuthorDto";
import { UpdateAuthorDto } from "./dto/updateAuthorDto";
import { FindAuthorsDto } from "./dto/findAuthors.dto";

@Controller("author")
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  // -------------------------------------------------------------
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }
  // -------------------------------------------------------------
  @Get()
  findAll(@Query() findAuthorsDto: FindAuthorsDto) {
    return this.authorService.findAll(findAuthorsDto);
  }
  // -------------------------------------------------------------
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }
  // -------------------------------------------------------------
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authorService.remove(id);
  }
}
