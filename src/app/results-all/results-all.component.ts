import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { ResultsPerPersonComponent } from '../results-per-person/results-per-person.component';
import { NgIf } from '@angular/common';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-results-all',
  standalone: true,
  imports: [ResultComponent,ResultsPerPersonComponent,NgIf],
  templateUrl: './results-all.component.html',
  styleUrl: './results-all.component.css'
})
export class ResultsAllComponent {
  constructor(public calculator: CalculatorService) {}
}
