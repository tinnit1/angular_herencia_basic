import {Action, createReducer, on} from '@ngrx/store';
import {decrement, dividir, increment, multiplicar, reset} from './contador.actions';

export const initialState = 20;

const _contadorReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state =>  initialState),
  on(multiplicar, (state, {num}) => state * num),
  on(dividir, (state, {num}) => state / num)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}


// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;
//     case decrement.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }
