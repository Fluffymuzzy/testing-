import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUUID()
  @IsNotEmpty()
  authorId: string;
}
