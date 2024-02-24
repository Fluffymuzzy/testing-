import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateAuthorDto {
  @ApiProperty({ description: "Author's name", example: "John" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "Author's surname", example: "Doe" })
  @IsString()
  @IsNotEmpty()
  surname: string;

  @ApiProperty({ description: "Author's email", example: "doe@example.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "Author's phone number",
    example: "+1234567890",
    pattern: "^+[1-9]d{1,14}$",
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message: "phoneNum must be a valid international phone number",
  })
  phoneNumber: string;
}
