import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { BookService } from '../src/app/services/authService';
import { AppComponent } from '../src/app/app.component';

describe('BookService with Component', () => {
  let service: BookService;

  beforeEach(async () => {
    // Test modülünü yapılandırıyoruz
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Test etmek istediğimiz bileşeni ekliyoruz
      providers: [BookService]      // BookService'i sağlayıcı olarak ekliyoruz
    }).compileComponents();

    // BookService'in örneğini alıyoruz
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a book', () => {
    service.addBook({ id: 1, title: 'Test Book', author: 'Test Author', isbn: '1234567890123', status: 'available' });
    expect(service.getBooks().length).toBe(1);
  });

  it('should retrieve a book by ID', () => {
    const book = { id: 1, title: 'Sample Book', author: 'Author Test', isbn: '1234567890123', status: 'available' };
    service.addBook(book);
    expect(service.getBookById(1)).toEqual(book);
  });

  it('should remove a book', () => {
    const book = { id: 1, title: 'Sample Book', author: 'Author Test', isbn: '1234567890123', status: 'available' };
    service.addBook(book);
    service.removeBook(1);
    expect(service.getBooks().length).toBe(0);
  });
}); // Test senaryoları için açıklama kapatma
