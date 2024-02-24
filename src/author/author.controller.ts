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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags('app')
@Controller("author")
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  // -------------------------------------------------------------
  @Post()
  @ApiOperation({ summary: "Create an author" })
  @ApiResponse({
    status: 201,
    description: "The author has been successfully created",
  })
  @ApiBody({ type: CreateAuthorDto })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDto);
  }
  // -------------------------------------------------------------
  @Get()
  @ApiOperation({ summary: "Find all authors or by using a filter" })
  @ApiResponse({ status: 200, description: "Return authors" })
  findAll(@Query() findAuthorsDto: FindAuthorsDto) {
    return this.authorService.findAll(findAuthorsDto);
  }
  // -------------------------------------------------------------
  @Patch(":id")
  @ApiOperation({ summary: "Update an author" })
  @ApiResponse({
    status: 200,
    description: "The author has been successfully updated",
  })
  @ApiParam({ name: "id", description: "Author ID" })
  @ApiBody({ type: UpdateAuthorDto })
  update(@Param("id") id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorService.update(id, updateAuthorDto);
  }
  // -------------------------------------------------------------
  @Delete(":id")
  @ApiOperation({ summary: "Delete an author" })
  @ApiResponse({
    status: 200,
    description: "The author has been successfully deleted",
  })
  @ApiParam({ name: "id", description: "Author ID" })
  remove(@Param("id") id: string) {
    return this.authorService.remove(id);
  }
}
