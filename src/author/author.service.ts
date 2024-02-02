import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAuthorDto } from "./dto/createAuthorDto";
import { UpdateAuthorDto } from "./dto/updateAuthorDto";
import { FindAuthorsDto } from "./dto/findAuthors.dto";

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}
  // -------------------------------------------------------------
  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prisma.author.create({
      data: createAuthorDto,
    });
  }
  // -------------------------------------------------------------
  async findAll(findAuthorDto: FindAuthorsDto) {
    const {
      name,
      names,
      surname,
      surnames,
      email,
      emails,
      phoneNumber,
      phoneNumbers,
    } = findAuthorDto;
    const conditions = [];

    const addCondition = (
      field: string,
      value: string | string[],
      mode: "OR" | "AND"
    ) => {
      if (Array.isArray(value) && value.length > 0) {
        conditions.push({
          [mode]: value.map((val) => ({
            [field]: {
              contains: val,
              mode: "insensitive",
            },
          })),
        });
      } else if (value) {
        conditions.push({
          [field]: {
            contains: value,
            mode: "insensitive",
          },
        });
      }
    };

    addCondition("name", name ?? names, "OR");
    addCondition("surname", surname ?? surnames, "OR");
    addCondition("email", email ?? emails, "OR");
    addCondition("phoneNumber", phoneNumber ?? phoneNumbers, "OR");

    const whereCondition =
      conditions.length > 1 ? { AND: conditions } : conditions[0] || {};

    return await this.prisma.author.findMany({
      where: whereCondition,
      include: { books: true },
    });
  }
  // -------------------------------------------------------------
  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    try {
      return await this.prisma.author.update({
        where: { id },
        data: updateAuthorDto,
      });
    } catch (error) {
      throw new NotFoundException(`Author with ID "${id}" not found`);
    }
  }
  // -------------------------------------------------------------
  async remove(id: string) {
    try {
      return await this.prisma.author.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Author with ID "${id}" not found`);
    }
  }
}
