import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Depot } from '../models/depot';
import { DepotFunction } from '../models/depot-function';
import { User } from '../models/user';

export interface PostNlPocState {
  user: User | null;
  depot: Depot | null;
  depotFunction: DepotFunction | null;
}

@Injectable({ providedIn: 'root' })
export class StateService {
  private readonly _state$ = new BehaviorSubject<PostNlPocState>({
    user: null,
    depot: null,
    depotFunction: null,
  });
  readonly state$ = this._state$.asObservable();

  get state() {
    return this._state$.value;
  }

  updateState(obj: Partial<PostNlPocState>): void {
    const currentValue = this._state$.value;
    const newValue = { ...currentValue, ...obj };
    this._state$.next(newValue);
  }
}
