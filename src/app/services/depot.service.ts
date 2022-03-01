import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Depot } from '../models/depot';
import { DepotFunction } from '../models/depot-function';

@Injectable({
  providedIn: 'root',
})
export class DepotService {
  readonly depots$ = of([
    { id: 'depot-sassenheim', name: 'Sassenheim' },
  ] as Array<Depot>);
  readonly depotFunctions$ = of([
    { id: 'function-1', name: 'Functiemanager' },
  ] as Array<DepotFunction>);
}
