import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Borrowing {
  borrowerName: string;
  borrowDate: Date;
  dueDate: Date;
  status: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  private borrowingsSubject: BehaviorSubject<Borrowing[]> = new BehaviorSubject<Borrowing[]>([]);
  public borrowings$: Observable<Borrowing[]> = this.borrowingsSubject.asObservable();

  constructor() {
    // Başlangıçta bazı örnek veriler
    const initialBorrowings: Borrowing[] = [
      {
        borrowerName: 'John Doe',
        borrowDate: new Date('2024-10-01'),
        dueDate: new Date('2024-10-15'),
        status: 'Returned',
        notes: 'No notes'
      },
      {
        borrowerName: 'Jane Smith',
        borrowDate: new Date('2024-10-05'),
        dueDate: new Date('2024-10-20'),
        status: 'Pending',
        notes: 'Waiting for return'
      }
    ];
    
    this.borrowingsSubject.next(initialBorrowings);
  }

  // Borrowing verisini eklemek için bir metod
  addBorrowing(borrowing: Borrowing): void {
    const currentBorrowings = this.borrowingsSubject.value;
    this.borrowingsSubject.next([...currentBorrowings, borrowing]);
  }

  // Borrowing verisini güncellemek için bir metod
  updateBorrowing(index: number, updatedBorrowing: Borrowing): void {
    const currentBorrowings = this.borrowingsSubject.value;
    currentBorrowings[index] = updatedBorrowing;
    this.borrowingsSubject.next([...currentBorrowings]);
  }
}
