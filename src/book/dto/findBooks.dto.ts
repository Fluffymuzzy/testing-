import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsString, IsArray, Min, IsInt } from "class-validator";

export class FindBooksDto {
  @ApiPropertyOptional({
    description: "Search by title",
    example: "A Modern Utopia",
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: "Search by titles",
    example: ["A Modern Utopia", "War and Peace"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  names?: string[];

  @ApiPropertyOptional({
    description: "Search by author surname",
    example: "Tolkien",
  })
  @IsOptional()
  @IsString()
  authorName?: string;

  @ApiPropertyOptional({
    description: "Search by authors surnames",
    example: ["Tolkien", "Wilde"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  authorNames?: string[];

  @ApiPropertyOptional({
    description: "Search by book genre",
    example: "A novel",
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: "Search by book genres",
    example: ["A novel", "Epic"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contents?: string[];

  @ApiPropertyOptional({
    description: "Number of records to skip for pagination",
    example: 0,
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  skip?: number;

  @ApiPropertyOptional({
    description: "Limit the number of records returned",
    example: 10,
    type: Number,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  take?: number;
}
