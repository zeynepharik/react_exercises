import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  template: `
    <div class="book-card">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <button (click)="onBorrow()">Borrow</button>
    </div>
  `,
})
export class BookCardComponent {
  @Input() book!: Book;

  onBorrow() {
    // Borrow logic
  }
}
