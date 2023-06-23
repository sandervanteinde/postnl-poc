import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Depot } from '../models/depot';
import { DepotFunction } from '../models/depot-function';
import { User } from '../models/user';
import {Shift} from "../models/shift";

export interface PostNlPocState {
  user: User | null;
  depot: Depot | null;
  depotFunction: DepotFunction | null;
  shift: Shift | null;
}

@Injectable({ providedIn: 'root' })
export class StateService {
  private readonly _state$ = new BehaviorSubject<PostNlPocState>({
    user: null,
    depot: null,
    depotFunction: null,
    shift: null
  });
  readonly state$ = this._state$.asObservable();

  get state() {
    return this._state$.value;
  }

  updateState(obj: Partial<PostNlPocState>): void {
    const currentValue = this._state$.value;
    const newValue = { ...structuredClone(currentValue), ...obj } as PostNlPocState;
    this._state$.next(newValue);
  }
}
