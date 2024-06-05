import { Component, EventEmitter,Output,ViewChild } from '@angular/core';
import { NumberInputComponent } from '../number-input/number-input.component';
import { NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tip-input',
  standalone: true,
  imports: [NumberInputComponent,NgIf,FormsModule],
  templateUrl: './tip-input.component.html',
  styleUrl: './tip-input.component.css'
})
export class TipInputComponent {

  selected: number = 0;

  @Output() selectedOut = new EventEmitter<any>();

  emitSelected(data: any): void {
    this.selectedOut.emit(this.selected);
  }

  //customAmount: number = 0;

  @Output() customAmountOut = new EventEmitter<any>();

  emitCustomAmount(data: any): void {
    this.customAmountOut.emit(data);
  }

  @ViewChild('customAmountInput') customAmountInput:NumberInputComponent|any;

  reset(): void {
    if (this.selected == -1){
      this.customAmountInput.reset();
      this.emitCustomAmount(0);
    }
    this.selected=0;
    this.emitSelected(0);
  }

}
