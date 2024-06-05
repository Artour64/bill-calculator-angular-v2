import { Component,Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';
import { NumberInputComponent } from '../number-input/number-input.component';
import { TipInputComponent } from '../tip-input/tip-input.component';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [NumberInputComponent,TipInputComponent],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {

  @Output() billOut = new EventEmitter<any>();
  @Output() selectedOut = new EventEmitter<any>();
  @Output() customAmountOut = new EventEmitter<any>();
  @Output() peopleOut = new EventEmitter<any>();

  billSignal(event:any) {
    this.billOut.emit(event);
  }

  tipPercentSignal(event:any) {
    this.selectedOut.emit(event);
  }

  tipCustomAmountSignal(event:any) {
    this.customAmountOut.emit(event);
  }

  peopleSignal(event:any) {
    this.peopleOut.emit(event);
  }

  @ViewChild('billInput') billInput:NumberInputComponent|any;
  @ViewChild('tipInput') tipInput:NumberInputComponent|any;
  @ViewChild('peopleInput') peopleInput:NumberInputComponent|any;

  reset(): void {
    this.billInput.reset();
    this.billSignal(0);

    this.tipInput.reset();
    this.tipPercentSignal(0);
    this.tipCustomAmountSignal(0);

    this.peopleInput.set(1);
    this.peopleOut.emit(1);
  }
}
