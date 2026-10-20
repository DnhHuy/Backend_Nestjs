import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { CreateBookDto } from './createBook.dto.js';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('')
  createBooks(@Body() createBookDto: CreateBookDto): CreateBookDto {
    return this.appService.createBooks(createBookDto);
  }

  @Get('')
  findAll(): CreateBookDto[] {
    return this.appService.getListBooks();
  }

  @Get('id')
  findOne(@Body() id: number): CreateBookDto | undefined {
    return this.appService.getBookById(id);
  }

  @Get('update')
  updateBook(
    @Body() id: number,
    @Body() updateBookDto: CreateBookDto,
  ): CreateBookDto {
    return this.appService.updateBook(id, updateBookDto);
  }

  @Get('delete')
  deleteBook(@Body() id: number): void {
    this.appService.deleteBook(id);
  }
}
