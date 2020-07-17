import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 40;

  @Output() valor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(value: number): void {
    if (!(this.progress + value < 0 || this.progress + value > 100)) {
      this.progress += value;
    }
    this.valor.emit(this.progress);
  }

  onChange(inputValue: number): void {
    if (inputValue > 100) {
      inputValue = 100;
    } else if (inputValue < 0) {
      inputValue = 0;
    }
    this.progress = inputValue;
    this.valor.emit(this.progress);
  }

}
