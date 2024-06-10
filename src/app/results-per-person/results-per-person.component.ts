import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-results-per-person',
  standalone: true,
  imports: [ResultComponent],
  templateUrl: './results-per-person.component.html',
  styleUrl: './results-per-person.component.css'
})
export class ResultsPerPersonComponent {
  constructor(public calculator: CalculatorService) {}
}
