import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs';
import { Depot } from 'src/app/models/depot';
import { DepotFunction } from 'src/app/models/depot-function';
import { DepotService } from 'src/app/services/depot.service';
import { StateService } from 'src/app/state/postnl-poc-state.service';

@UntilDestroy()
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

  readonly canClickContinue$ = this._state.state$.pipe(
    map(({ depot, depotFunction }) => depot !== null && depotFunction !== null)
  );

  constructor(
    private readonly _depotService: DepotService,
    private readonly _fb: FormBuilder,
    private readonly _state: StateService
  ) {
    this.form.controls.depot.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((selectedDepot) =>
        this._state.updateState({ depot: selectedDepot })
      );
    this.form.controls.function.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((selectedFunction) =>
        this._state.updateState({ depotFunction: selectedFunction })
      );
  }
}
