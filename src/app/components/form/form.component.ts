import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() justifyContent: 'center' | 'flex-start' = 'flex-start';
}
