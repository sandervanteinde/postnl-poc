import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDepotAndFunctionComponent } from './pages/select-depot-and-function/select-depot-and-function.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDepotAndFunctionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
