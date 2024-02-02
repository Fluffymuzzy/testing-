import { IsEmail, IsNotEmpty, IsOptional, IsString,  } from "class-validator";

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
    @IsOptional()
    phoneNumber?: string;

}