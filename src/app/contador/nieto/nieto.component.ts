import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() changeContador = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.changeContador.emit(0);
  }
}
