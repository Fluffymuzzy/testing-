import { ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { CreateAuthorDto } from "./createAuthorDto";

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
  @ApiPropertyOptional({ description: "Author's name", example: "John" })
  name?: string;

  @ApiPropertyOptional({ description: "Author's surname", example: "Doe" })
  surname?: string;

  @ApiPropertyOptional({
    description: "Author's email",
    example: "doe@example.com",
  })
  email?: string;

  @ApiPropertyOptional({
    description: "Author's phone number",
    example: "+1234567890",
    pattern: "^+[1-9]d{1,14}$",
  })
  phoneNumber?: string;
}
