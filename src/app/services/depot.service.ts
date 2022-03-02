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
    { id: 'depot-amsterdam-south-east', name: 'Amsterdam Zuid-Oost' },
    { id: 'depot-amsterdam-crossdock', name: 'Crossdock Amsterdam' },
    { id: 'depot-halfway', name: 'Halfweg' },
  ] as Array<Depot>);
  readonly depotFunctions$ = of([
    { id: 'function-manager', name: 'Functiemanager' },
    { id: 'help-process-manager', name: 'Hulp Procesmanager' },
    { id: 'plannig-desk', name: 'Planbalie' },
    { id: 'senior-process-manager', name: 'Senior Procesmanager' },
    { id: 'depot-manager', name: 'Depot manager' },
  ] as Array<DepotFunction>);
}
