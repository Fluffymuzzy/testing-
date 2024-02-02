import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBookDto } from "./dto/createBookDto";
import { UpdateBookDto } from "./dto/updateBookDto";
import { FindBooksDto } from "./dto/findBooks.dto";

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  // -------------------------------------------------------------
  async create(createBookDto: CreateBookDto) {
    return await this.prisma.book.create({
      data: createBookDto,
    });
  }
  // -------------------------------------------------------------
  async findAll(findBooksDto: FindBooksDto) {
    const { name, names, authorName, authorNames } = findBooksDto;
    const conditions = [];

    const addCondition = (field: string, value: string | string[]) => {
      if (field === "author.surname") {
        if (Array.isArray(value)) {
          conditions.push({
            author: {
              surname: {
                in: value,
                mode: "insensitive",
              },
            },
          });
        } else {
          conditions.push({
            author: {
              surname: {
                contains: value,
                mode: "insensitive",
              },
            },
          });
        }
      } else {
        if (Array.isArray(value)) {
          conditions.push({
            [field]: {
              in: value,
              mode: "insensitive",
            },
          });
        } else {
          conditions.push({
            [field]: {
              contains: value,
              mode: "insensitive",
            },
          });
        }
      }
    };

    addCondition("name", name ?? names);
    addCondition("author.surname", authorName ?? authorNames);

    const whereCondition = conditions.length > 0 ? { AND: conditions } : {};

    return await this.prisma.book.findMany({
      where: whereCondition,
      include: { author: true },
    });
  }

  // -------------------------------------------------------------
  async update(id: string, updateBookDto: UpdateBookDto) {
    try {
      return await this.prisma.book.update({
        where: { id },
        data: updateBookDto,
      });
    } catch (error) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
  }
  // -------------------------------------------------------------
  async remove(id: string) {
    try {
      return await this.prisma.book.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
  }
}
