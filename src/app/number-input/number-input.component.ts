import { Component, Input, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css'
})
export class NumberInputComponent {
  @Input()
  title: string = "Title";

  @Input()
  inputId: string = "";

  @Input()
  data: number = 0;

  @Output() dataOut = new EventEmitter<any>();

  signal(event:any) {
    this.dataOut.emit(this.data);
  }

  reset(): void {
    this.data = 0;
  }

  set(data: any): void {
    this.data = Number(data);
  }
}
