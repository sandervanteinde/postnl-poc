import { Component } from '@angular/core';
import {StateService} from "../../state/postnl-poc-state.service";
import {map} from "rxjs";

@Component({
  selector: 'app-shift-landing-page',
  templateUrl: './shift-landing-page.component.html',
  styleUrls: ['./shift-landing-page.component.scss']
})
export class ShiftLandingPageComponent {
  readonly name$ = this._stateService.state$.pipe(
    map(x => x.shift?.name)
  );

  constructor(private readonly _stateService: StateService) {
  }
}
