import { Component } from '@angular/core';
import { ResultsAllComponent } from '../results-all/results-all.component';
import { InputFormComponent } from '../input-form/input-form.component';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InputFormComponent,ResultsAllComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  constructor(public calculator: CalculatorService) {}
}
