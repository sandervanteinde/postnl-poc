import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SourceData } from 'src/source-data';

interface Shift {
  startTime: string;
  endTime: string;
  description: string;
}
@Component({
  templateUrl: './select-shift.component.html',
  styleUrls: ['./select-shift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectShiftComponent {
  selectedShift = 0;

  shifts: Array<Array<Shift>> = SourceData.shifts;
}
