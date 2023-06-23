import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SourceData } from 'src/source-data';
import {Shift} from "../../models/shift";
import {StateService} from "../../state/postnl-poc-state.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './select-shift.component.html',
  styleUrls: ['./select-shift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectShiftComponent {
  selectedShift = 0;

  shifts: Array<Shift> = SourceData.shifts;

  constructor(
    private readonly _stateService: StateService,
    private readonly _router: Router
  ) {
    const selectedShift = _stateService.state.shift;
    if(selectedShift !== null){
      this.selectedShift = this.shifts.findIndex(s => s.name === selectedShift.name);
    }
  }

  confirmSelectedShift() {
    const shift = this.shifts[this.selectedShift];
    this._stateService.updateState({
      shift: shift
    });
    this._router.navigate(['/', 'shift'])

  }
}
