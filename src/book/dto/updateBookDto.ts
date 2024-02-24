import { PartialType } from "@nestjs/mapped-types";
import { CreateBookDto } from "./createBookDto";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiPropertyOptional({
    description: "Title of the book",
    example: "The Hobbit",
  })
  name?: string;

  @ApiPropertyOptional({
    description: "Description of the book",
    example: "A novel",
  })
  content?: string;

  @ApiPropertyOptional({description: "Description of the book", example: "123e4567-e89b-12d3-a456-426614174000"})
  authorId?: string;
}
