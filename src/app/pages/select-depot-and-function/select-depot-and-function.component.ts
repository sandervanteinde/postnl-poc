import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@ngneat/reactive-forms';
import { Depot } from 'src/app/models/depot';
import { DepotFunction } from 'src/app/models/depot-function';
import { DepotService } from 'src/app/services/depot.service';

@Component({
  templateUrl: './select-depot-and-function.component.html',
  styleUrls: ['./select-depot-and-function.component.scss'],
})
export class SelectDepotAndFunctionComponent {
  readonly form = this._fb.group({
    depot: null as Depot | null,
    function: null as DepotFunction | null,
  });

  readonly availableDepots$ = this._depotService.depots$;
  readonly availableFunctions$ = this._depotService.depotFunctions$;

  constructor(
    private readonly _depotService: DepotService,
    private readonly _fb: FormBuilder
  ) {}
}
