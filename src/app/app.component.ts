import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debounceTime, filter, map, startWith } from 'rxjs';

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ transform: 'translateX(100%)' })], {
      optional: true,
    }),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [
        style({ transform: 'translateX(0)' }),
        animate('0.15s', style({ transform: 'translateX(-100%)' })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)' }),
        animate('0.15s', style({ transform: 'translateX(0)' })),
      ],
      { optional: true }
    ),
  ]),
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation,
    trigger('animatedHeder', [
      state('center', style({ left: 'calc(50% - 40px)' })),
      state('left', style({ left: '0px' })),
      transition('center <=> left', animate(175)),
    ]),
  ],
})
export class AppComponent {
  readonly hasCenteredLogo$ = this._router.events.pipe(
    filter((ev) => ev instanceof NavigationEnd),
    startWith(undefined),
    map(() => this.isCenteredLogoEnabled()),
    debounceTime(100),
    startWith(true)
  );
  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {}

  private isCenteredLogoEnabled(): boolean {
    let deepestChild = this._route.snapshot;
    while (deepestChild.firstChild) {
      deepestChild = deepestChild.firstChild;
    }

    return deepestChild.data['hasCenteredLogo'] ?? false;
  }
}
