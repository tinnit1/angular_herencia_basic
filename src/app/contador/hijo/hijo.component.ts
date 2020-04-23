import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('count')
      .subscribe(count => this.contador = count);
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({num: 2}));
  }

  dividir() {
    this.store.dispatch(actions.dividir({num: 2}));
  }
}
