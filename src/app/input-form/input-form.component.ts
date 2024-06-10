import { Component} from '@angular/core';
import { NumberInputComponent } from '../number-input/number-input.component';
import { TipInputComponent } from '../tip-input/tip-input.component';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [NumberInputComponent,TipInputComponent],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  constructor(public calculator: CalculatorService) {}
}
