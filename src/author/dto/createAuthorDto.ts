import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message: "phoneNum must be a valid international phone number",
  })
  phoneNumber: string;
}
