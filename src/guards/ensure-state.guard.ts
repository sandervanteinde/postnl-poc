import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {
  PostNlPocState,
  StateService,
} from 'src/app/state/postnl-poc-state.service';

export interface StateGuardRoute extends Route {
  data?: Data & {
    requiredState?: (state: PostNlPocState) => boolean;
    redirectToOnInvalidState?: string[];
  };
  children?: StateGuardRoutes;
}

export type StateGuardRoutes = Array<StateGuardRoute>;

@Injectable({ providedIn: 'root' })
export class EnsureStateGuard  {
  constructor(
    private readonly _postnlPocStateService: StateService,
    private readonly _router: Router
  ) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    const routeData = childRoute.data as StateGuardRoute['data'];
    if (!routeData?.requiredState) {
      return true;
    }

    const state = this._postnlPocStateService.state;
    if (!routeData.requiredState(state)) {
      if (routeData.redirectToOnInvalidState) {
        this._router.navigate(routeData.redirectToOnInvalidState);
      }
      return false;
    }
    return true;
  }
}
