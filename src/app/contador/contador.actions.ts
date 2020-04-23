import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');
export const reset = createAction('[Contador] Reset');

export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{num: number}>()
);

export const dividir = createAction(
  '[Contador] Dividir',
  props<{num: number}>()
);
