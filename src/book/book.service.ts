import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateBookDto } from "./dto/createBookDto";
import { UpdateBookDto } from "./dto/updateBookDto";
import { FindBooksDto } from "./dto/findBooks.dto";
import { Prisma } from "@prisma/client";

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
    const {
      name,
      names,
      authorName,
      authorNames,
      content,
      contents,
      skip,
      take,
    } = findBooksDto;
  
    const conditions = [];
  
    const addCondition = (field: string, value: string | string[]) => {
      if (field.startsWith("author.")) {
        const fieldName = field.split(".")[1];
        if (Array.isArray(value)) {
          conditions.push({
            author: {
              [fieldName]: {
                in: value,
                mode: "insensitive",
              },
            },
          });
        } else if (value) {
          conditions.push({
            author: {
              [fieldName]: {
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
        } else if (value) {
          conditions.push({
            [field]: {
              contains: value,
              mode: "insensitive",
            },
          });
        }
      }
    };
  
    if (name || names) addCondition("name", name ?? names);
    if (authorName || authorNames) addCondition("author.surname", authorName ?? authorNames);
    if (content || contents) addCondition("content", content ?? contents);
  
    const whereCondition = conditions.length > 0 ? { AND: conditions } : {};
  
    const params: {
      where: Prisma.BookWhereInput;
      include: Prisma.BookInclude;
      skip?: number;
      take?: number;
    } = {
      where: whereCondition,
      include: { author: true },
    };
  
    if (skip !== undefined) params.skip = Number(skip);
    if (take !== undefined) params.take = Number(take);
  
    return await this.prisma.book.findMany(params);
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
