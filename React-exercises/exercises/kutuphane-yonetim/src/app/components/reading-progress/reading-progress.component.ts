import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reading-progress',
  templateUrl: './reading-progress.component.html',
  styleUrls: ['./reading-progress.component.scss']
})
export class ReadingProgressComponent {
  @Input() progress: any;
}
