import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowingsComponent } from './borrowings.component';
import { BorrowingService } from '../../services/borrowing.service';
import { of } from 'rxjs';

describe('BorrowingsComponent', () => {
  let component: BorrowingsComponent;
  let fixture: ComponentFixture<BorrowingsComponent>;
  let borrowingService: jasmine.SpyObj<BorrowingService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BorrowingService', ['getBorrowings']);
    
    await TestBed.configureTestingModule({
      declarations: [BorrowingsComponent],
      providers: [{ provide: BorrowingService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowingsComponent);
    component = fixture.componentInstance;
    borrowingService = TestBed.inject(BorrowingService) as jasmine.SpyObj<BorrowingService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load borrowings on init', () => {
    const mockBorrowings = [{ borrowerName: 'John Doe', borrowDate: new Date() }];
    borrowingService.getBorrowings.and.returnValue(of(mockBorrowings));
    component.ngOnInit();
    expect(component.borrowings).toEqual(mockBorrowings);
  });
});
