import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.scss']
})
export class BorrowingComponent {
  @Input() borrowing: any;
}
