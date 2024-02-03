import { Type } from "class-transformer";
import { IsEmail, IsOptional, IsString, IsArray, IsInt, Min } from "class-validator";

export class FindAuthorsDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  names?: string[];

  @IsOptional()
  @IsString()
  surname?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  surnames?: string[];

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsArray()
  emails?: string[];

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  phoneNumbers?: string[];

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
