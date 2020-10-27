import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickedAdressPage } from './picked-adress.page';

const routes: Routes = [
  {
    path: '',
    component: PickedAdressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickedAdressPageRoutingModule {}
