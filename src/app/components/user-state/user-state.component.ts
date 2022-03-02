import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { pluck } from 'rxjs';
import {
  PostNlPocState,
  StateService,
} from 'src/app/state/postnl-poc-state.service';

@Component({
  selector: 'app-user-state',
  templateUrl: './user-state.component.html',
  styleUrls: ['./user-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStateComponent {
  readonly depot$ = this._state.state$.pipe(pluck('depot', 'name'));
  readonly function$ = this._state.state$.pipe(pluck('depotFunction', 'name'));
  readonly user$ = this._state.state$.pipe(pluck('user', 'name'));
  constructor(private readonly _state: StateService) {}
}
