import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  //input
  bill: number = 0;
  tipPercent: number = 0;
  tipCustomAmount: number = 0;
  people: number = 1;


  //switches

  get tipIsCustom() : boolean {
    return this.tipPercent == -1;
  }

  get isSplit(): boolean {
    return this.people > 1;
  }


  //output

  get tipAmount(): number {
    return this.roundTwoDecimalPlaces(
      this.tipIsCustom 
        ? this.tipCustomAmount
        : this.bill * this.tipPercent * 0.01
    );
  }
  get totalAmount() {
    return this.roundTwoDecimalPlaces(this.bill + this.tipAmount);
  }
  

  //per person output

  get billSplit(): number {
    return this.roundTwoDecimalPlaces(this.bill / this.people);
  }

  get tipSplit(): number {
    return this.roundTwoDecimalPlaces(this.tipAmount / this.people);
  }
  
  get totalSplit(): number {
    return this.roundTwoDecimalPlaces(this.totalAmount / this.people);
  };


  //methods

  reset(): void {
    this.bill = 0;
    this.tipPercent = 0;
    this.tipCustomAmount = 0;
    this.people = 1;
  }

  //utility

  roundTwoDecimalPlaces(num: number) {
    //add epsilon to make sure 0.005 rounds up correctly
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  constructor() { }
}
