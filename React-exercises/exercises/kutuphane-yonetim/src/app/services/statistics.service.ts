import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Statistics {
  totalBooks: number;
  borrowedBooks: number;
  readBooks: number;
  readingTime: number; // dakika cinsinden
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private apiUrl = 'http://yourapi.com/statistics'; // API endpoint

  constructor(private http: HttpClient) {}

  getStatistics(): Observable<Statistics> {
    return this.http.get<Statistics>(this.apiUrl);
  }
}
