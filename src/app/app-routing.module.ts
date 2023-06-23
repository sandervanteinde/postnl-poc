import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EnsureStateGuard,
  StateGuardRoutes,
} from 'src/guards/ensure-state.guard';
import { LoginComponent } from './pages/login/login.component';
import { SelectDepotAndFunctionComponent } from './pages/select-depot-and-function/select-depot-and-function.component';
import { SelectShiftComponent } from './pages/select-shift/select-shift.component';
import {ShiftLandingPageComponent} from "./pages/shift-landing-page/shift-landing-page.component";

const routes: StateGuardRoutes = [
  {
    path: '',
    canActivateChild: [EnsureStateGuard],
    children: [
      {
        path: '',
        component: LoginComponent,
        data: {
          hasCenteredLogo: true,
        },
      },
      {
        path: 'select-depot',
        component: SelectDepotAndFunctionComponent,
        data: {
          requiredState: (state) => state.user !== null,
          redirectToOnInvalidState: ['/'],
          hasCenteredLogo: true,
        },
      },
      {
        path: 'select-shift',
        component: SelectShiftComponent,
        data: {
          requiredState: (state) =>
            state.depotFunction !== null && state.depot !== null,
          redirectToOnInvalidState: ['/select-depot'],
        },
      },
      {
        path: 'shift',
        component: ShiftLandingPageComponent,
        data: {
          requiredState: state => state.shift !== null,
          redirectToOnInvalidState: ['/select-shift']
        }
      }
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
