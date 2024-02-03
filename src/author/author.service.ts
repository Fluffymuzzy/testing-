import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAuthorDto } from "./dto/createAuthorDto";
import { UpdateAuthorDto } from "./dto/updateAuthorDto";
import { FindAuthorsDto } from "./dto/findAuthors.dto";
import { Prisma } from "@prisma/client";

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
      skip,
      take,
    } = findAuthorDto;

    const conditions = [];

    const addCondition = (
      field: string,
      value: string | string[],
      mode: "OR" | "AND" = "OR"
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

    if (name || names) addCondition("name", name ?? names);
    if (surname || surnames) addCondition("surname", surname ?? surnames);
    if (email || emails) addCondition("email", email ?? emails);
    if (phoneNumber || phoneNumbers)
      addCondition("phoneNumber", phoneNumber ?? phoneNumbers);

    const whereCondition = conditions.length > 0 ? { AND: conditions } : {};

    const params: {
      where: Prisma.AuthorWhereInput;
      include: Prisma.AuthorInclude;
      skip?: number;
      take?: number;
    } = {
      where: whereCondition,
      include: { books: true },
    };

    if (skip !== undefined) params.skip = Number(skip);
    if (take !== undefined) params.take = Number(take);

    return await this.prisma.author.findMany(params);
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
