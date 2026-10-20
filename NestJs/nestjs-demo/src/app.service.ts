import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './createBook.dto.js';
import { CreateAuthorDto } from './createAuthor.dto.js';

let listBooks: CreateBookDto[] = [];
let listAuthors: CreateAuthorDto[] = [];

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

  getBooksByAuthorId(id_tg: number): CreateBookDto[] {
    return listBooks.filter((book) => book.id_tg === id_tg);
  }

  updateBook(id: number, updateBookDto: CreateBookDto): CreateBookDto {
    const index = listBooks.findIndex((book) => book.id === id);
    if (index !== -1) {
      listBooks[index] = { ...listBooks[index], ...updateBookDto };
      return listBooks[index];
    }
    throw new Error('Book not found');
  }

  deleteBook(id: number): void {
    const index = listBooks.findIndex((book) => book.id === id);
    if (index !== -1) {
      listBooks.splice(index, 1);
    } else {
      throw new Error('Book not found');
    }
  }
}
