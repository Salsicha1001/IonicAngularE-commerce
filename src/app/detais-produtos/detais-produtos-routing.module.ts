import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaisProdutosPage } from './detais-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: DetaisProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaisProdutosPageRoutingModule {}
