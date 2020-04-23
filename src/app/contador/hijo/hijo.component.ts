import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() changeContador = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador *= 2;
    this.changeContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.changeContador.emit(this.contador);
  }
}
