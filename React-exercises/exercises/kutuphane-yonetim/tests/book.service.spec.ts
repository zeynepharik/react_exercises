import { describe, it, expect, beforeEach } from 'vitest';
import { BookService } from '../src/app/services/book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    service = new BookService(); // doğrudan yeni bir örnek oluşturun
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a book', () => {
    service.addBook({ id: 1, title: 'Test Book', author: 'Test Author', isbn: '1234567890123', status: 'available' });
    expect(service.getBooks().length).toBe(1);
  });
});
