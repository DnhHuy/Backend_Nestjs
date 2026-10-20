import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './createBook.dto.js';

let listBooks: CreateBookDto[] = [];

@Injectable()
export class AppService {
  createBooks(createBookDto: CreateBookDto): CreateBookDto {
    listBooks.push(createBookDto);
    return createBookDto;
  }
  getListBooks(): CreateBookDto[] {
    return listBooks;
  }

  getBookById(id: number): CreateBookDto | undefined {
    return listBooks.find((book) => book.id === id);
  }

  updateBook(id: number, updateBookDto: CreateBookDto): CreateBookDto {
    const index = listBooks.findIndex((book) => book.id === id);
    if (index !== -1) {
      listBooks[index] = { ...listBooks[index], ...updateBookDto };
      return listBooks[index];
    }
    throw new Error("Book not found");
  }

  deleteBook(id: number): void {
    const index = listBooks.findIndex((book) => book.id === id);
    if (index !== -1) {
      listBooks.splice(index, 1);
    } else {
      throw new Error("Book not found");
    }
  }
}