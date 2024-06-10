import { Component } from '@angular/core';
import { NumberInputComponent } from '../number-input/number-input.component';
import { NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-tip-input',
  standalone: true,
  imports: [NumberInputComponent,NgIf,FormsModule],
  templateUrl: './tip-input.component.html',
  styleUrl: './tip-input.component.css'
})
export class TipInputComponent {
  constructor(public calculator: CalculatorService) {}
}
