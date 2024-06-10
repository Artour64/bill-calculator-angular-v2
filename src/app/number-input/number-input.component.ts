import { Component, Input, Output, EventEmitter} from '@angular/core';
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

  @Output() dataOut = new EventEmitter<number>();

  signal() {
    this.dataOut.emit(this.data);
  }
}
