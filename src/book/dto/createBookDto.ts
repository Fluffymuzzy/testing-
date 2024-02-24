import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({description: "Title of the book", example: "A Modern Utopia"})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({description: "Content of the book", example: "A novel"})
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ description: 'Author ID', example: '123e4567-e89b-12d3-a456-426614174000' })
  authorId: string;
}
