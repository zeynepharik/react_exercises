import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch books', () => {
    const dummyBooks = [{ title: 'Test Book', author: 'Test Author' }];
    service.getBooks().subscribe(books => {
      expect(books).toEqual(dummyBooks);
    });

    const request = httpMock.expectOne('http://localhost:3000/api/books');
    expect(request.request.method).toBe('GET');
    request.flush(dummyBooks);
  });
});
