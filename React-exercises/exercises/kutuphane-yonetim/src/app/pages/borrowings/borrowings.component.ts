import { Component, OnInit } from '@angular/core';
import { BorrowingService } from '../../services/borrowing.service';

@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.scss']
})
export class BorrowingsComponent implements OnInit {
  borrowings: any[] = [];

  constructor(private borrowingService: BorrowingService) {}

  ngOnInit(): void {
    this.borrowingService.getBorrowings().subscribe((data) => {
      this.borrowings = data;
    });
  }
}
