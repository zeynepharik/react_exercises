import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadingProgressComponent } from './reading-progress.component';

describe('ReadingProgressComponent', () => {
  let component: ReadingProgressComponent;
  let fixture: ComponentFixture<ReadingProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadingProgressComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingProgressComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display reading progress', () => {
    component.progress = {
      bookId: 1,
      currentPage: 100,
      totalPages: 300,
      readingTime: 50,
      notes: ['Interesting', 'Loved it']
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.reading-progress__bookId').textContent).toContain('Kitap ID: 1');
    expect(compiled.querySelector('.reading-progress__currentPage').textContent).toContain('Mevcut Sayfa: 100');
  });
});
