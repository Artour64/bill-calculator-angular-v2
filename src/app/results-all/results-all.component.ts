import { Component, Input } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { ResultsPerPersonComponent } from '../results-per-person/results-per-person.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-results-all',
  standalone: true,
  imports: [ResultComponent,ResultsPerPersonComponent,NgIf],
  templateUrl: './results-all.component.html',
  styleUrl: './results-all.component.css'
})
export class ResultsAllComponent {

  //passed in parameters keep getting cast to strings

  @Input()
  showSplitD: string = "false";

  @Input()
  tipAmountD: string = "0";

  @Input()
  totalD: string = "0";

  @Input()
  billSplitD: string = "0";
  
  @Input()
  tipSplitD: string = "0";

  @Input()
  totalSplitD: string = "0";
}
