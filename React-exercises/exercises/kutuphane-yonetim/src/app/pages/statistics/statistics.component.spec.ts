import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsComponent } from './statistics.component';
import { StatisticsService } from '../../services/statistics.service';
import { of } from 'rxjs';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  let statisticsService: jasmine.SpyObj<StatisticsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('StatisticsService', ['getStatistics']);
    
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
      providers: [{ provide: StatisticsService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    statisticsService = TestBed.inject(StatisticsService) as jasmine.SpyObj<StatisticsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load statistics on init', () => {
    const mockStatistics = {
      totalBooks: 100,
      borrowedBooks: 20,
      readBooks: 50,
      readingTime: 300
    };
    statisticsService.getStatistics.and.returnValue(of(mockStatistics));
    
    component.ngOnInit();
    
    expect(component.statistics).toEqual(mockStatistics);
  });

  it('should display statistics in template', () => {
    const mockStatistics = {
      totalBooks: 100,
      borrowedBooks: 20,
      readBooks: 50,
      readingTime: 300
    };
    statisticsService.getStatistics.and.returnValue(of(mockStatistics));
    
    component.ngOnInit();
    fixture.detectChanges(); // Template'i güncelle
    
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Okuma İstatistikleri');
    expect(compiled.querySelector('p:nth-child(2)').textContent).toContain('Toplam Kitap: 100');
    expect(compiled.querySelector('p:nth-child(3)').textContent).toContain('Ödünç Verilen Kitap: 20');
    expect(compiled.querySelector('p:nth-child(4)').textContent).toContain('Okunan Kitap: 50');
    expect(compiled.querySelector('p:nth-child(5)').textContent).toContain('Okuma Süresi: 300 dakika');
  });
});
