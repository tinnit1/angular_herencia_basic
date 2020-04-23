import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {reset} from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('count')
      .subscribe( count => this.contador = count);
  }

  reset() {
    this.store.dispatch(reset());
  }
}
