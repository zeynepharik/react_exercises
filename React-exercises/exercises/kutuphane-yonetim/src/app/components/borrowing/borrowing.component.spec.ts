import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // HTTP test modülü
import { BorrowingComponent } from './borrowing.component';

describe('BorrowingComponent', () => {
  let component: BorrowingComponent;
  let fixture: ComponentFixture<BorrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Buraya ekledik
      declarations: [BorrowingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowingComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture.detectChanges(); // Değişiklikleri yansıtıyoruz
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display borrowing details', () => {
    component.borrowing = {
      borrowerName: 'John Doe',
      borrowDate: new Date(),
      dueDate: new Date(),
      status: 'Returned',
      notes: 'No notes'
    };
    fixture.detectChanges(); // Değişiklikleri yansıtıyoruz

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.borrowing__borrower').textContent).toContain('John Doe');
    expect(compiled.querySelector('.borrowing__status').textContent).toContain('Returned');
  });
});
