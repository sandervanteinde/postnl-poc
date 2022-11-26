import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SourceData } from 'src/source-data';
import { Depot } from '../models/depot';
import { DepotFunction } from '../models/depot-function';

@Injectable({
  providedIn: 'root',
})
export class DepotService {
  readonly depots$ = of(SourceData.depots as Array<Depot>);
  readonly depotFunctions$ = of(
    SourceData.depotFunctions as Array<DepotFunction>
  );
}
