import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/authService';

@Component({
  selector: 'app-book-form',
  template: `
    <form [formGroup]="bookForm" (ngSubmit)="onSubmit()">
      <input formControlName="title" placeholder="Title" />
      <input formControlName="author" placeholder="Author" />
      <input formControlName="isbn" placeholder="ISBN" />
      <button type="submit">Add Book</button>
    </form>
  `,
})
export class BookFormComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value);
    }
  }
}
