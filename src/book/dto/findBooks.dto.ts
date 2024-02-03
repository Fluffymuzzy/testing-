import { Type } from "class-transformer";
import { IsOptional, IsString, IsArray, IsNumber, Min, IsInt } from "class-validator";

export class FindBooksDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  names?: string[];

  @IsOptional()
  @IsString()
  authorName?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  authorNames?: string[];

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contents?: string[];

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  skip?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  take?: number;
}
