import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Store, select } from '@ngrx/store';
import {DECREMENT, INCREMENT, RESET, SET} from "../reducers/counter.reducer";

interface AppState {
    count: number;
}


@Component({
  selector: 'app-root',
  template: `
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset Counter</button>
      <input type="number" [(ngModel)]="newCounterVal" />
      <button (click)="set()">Set</button>
      <div>Current Count: {{ count$ | async }}</div>
  `,
  styles: []
})
export class AppComponent {
    count$: Observable<number>;
    newCounterVal: number;

    constructor(private store: Store<AppState>) {
        this.count$ = store.pipe(select('count'));
        store.subscribe((fullState: AppState) => {
            console.log(fullState)
        })
    }

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    set() {
        this.store.dispatch({type: SET, payload: this.newCounterVal});
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }
}
