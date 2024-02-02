import { IsOptional, IsString, IsArray } from "class-validator";

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
}
