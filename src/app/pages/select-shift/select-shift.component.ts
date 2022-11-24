import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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

  shifts: Array<Array<Shift>> = [
    [
      { startTime: '05:30', endTime: '06:30', description: 'CAO planning' },
      {
        startTime: '06:30',
        endTime: '09:30',
        description: 'Poot 1 & Opvoerplein',
      },
      { startTime: '09:30', endTime: '10:00', description: 'Pauze' },
      { startTime: '10:00', endTime: '14:00', description: 'Administratie' },
    ],
    [
      { startTime: '10:00', endTime: '10:30', description: 'CAO planning' },
      {
        startTime: '10:30',
        endTime: '13:30',
        description: 'Poot 1 & Opvoerplein',
      },
      { startTime: '13:30', endTime: '14:00', description: 'Pauze' },
      { startTime: '14:00', endTime: '18:00', description: 'CAO planning' },
    ],
    [
      { startTime: '16:00', endTime: '16:30', description: 'Administratie' },
      {
        startTime: '16:30',
        endTime: '19:30',
        description: 'Poot 1 & Opvoerplein',
      },
      { startTime: '19:30', endTime: '20:00', description: 'Pauze' },
      { startTime: '20:00', endTime: '21:00', description: 'Administratie' },
    ],
  ];
}
