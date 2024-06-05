import { Component,Input } from '@angular/core';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-results-per-person',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './results-per-person.component.html',
  styleUrl: './results-per-person.component.css'
})
export class ResultsPerPersonComponent {

  @Input()
  billSplit: string = "0";
  
  @Input()
  tipSplit: string = "0";

  @Input()
  totalSplit: string = "0";
}
