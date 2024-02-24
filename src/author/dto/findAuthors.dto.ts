import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsEmail,
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  Min,
} from "class-validator";

export class FindAuthorsDto {
  @ApiPropertyOptional({
    description: "Search by author name",
    example: "John",
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: "Search by authors names",
    example: ["John", "Oscar"],
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
  surname?: string;

  @ApiPropertyOptional({
    description: "Search by authors surnames",
    example: ["Tolkien", "Wilde"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  surnames?: string[];

  @ApiPropertyOptional({
    description: "Search by author email",
    example: "tolkien@example.com",
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: "Search by authors emails",
    example: ["tolkien@example.com", "wilde@example.com"],
  })
  @IsOptional()
  @IsArray()
  emails?: string[];

  @ApiPropertyOptional({
    description: "Search by phone number",
    example: "+1234555770",
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiPropertyOptional({
    description: "Search by phone numbers",
    example: ["+1234555770", "+1234555780"],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  phoneNumbers?: string[];

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
