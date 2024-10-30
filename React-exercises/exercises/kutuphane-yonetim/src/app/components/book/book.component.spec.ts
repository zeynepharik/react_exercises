import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book details', () => {
    component.book = {
      title: 'Test Book',
      author: 'Test Author',
      category: 'Fiction',
      location: 'Shelf A',
      status: 'Available',
      notes: 'No notes',
      coverImage: 'test-image.jpg'
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.book__title').textContent).toContain('Test Book');
    expect(compiled.querySelector('.book__author').textContent).toContain('Test Author');
  });
});
