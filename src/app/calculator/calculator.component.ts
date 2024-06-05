import { Component } from '@angular/core';
import { ResultsAllComponent } from '../results-all/results-all.component';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InputFormComponent,ResultsAllComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  bill: number = 0;

  tipPercent: number = 0;
  tipCustomAmount: number = 0;
  
  people: number = 1;

  get tipAmount(): number {
    return this.tipPercent == -1
      ? this.tipCustomAmount
      : this.bill * this.tipPercent * 0.01;
  }

  get total(): number {
    return this.bill + this.tipAmount;
  }

  get showSplit(): boolean {
    return this.people > 1;
  }

  get billSplit(): number {
    return this.bill / this.people;
  }
  
  get tipSplit(): number {
    return this.tipAmount / this.people;
  }

  get totalSplit(): number{
    return this.total / this.people;
  }

  reset(): void {

  }
  
}
