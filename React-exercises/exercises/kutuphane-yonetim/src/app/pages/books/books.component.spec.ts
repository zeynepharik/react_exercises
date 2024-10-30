import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { BookService } from '../../services/book.service';
import { of } from 'rxjs';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let bookService: jasmine.SpyObj<BookService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BookService', ['getBooks']);
    
    await TestBed.configureTestingModule({
      declarations: [BooksComponent],
      providers: [{ provide: BookService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    bookService = TestBed.inject(BookService) as jasmine.SpyObj<BookService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books on init', () => {
    const mockBooks = [{ title: 'Test Book', author: 'Test Author' }];
    bookService.getBooks.and.returnValue(of(mockBooks));
    component.ngOnInit();
    expect(component.books).toEqual(mockBooks);
  });
});
