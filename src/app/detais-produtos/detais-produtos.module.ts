import { CartService } from './../Service/Domain/cart.service';
import { ProdutoService } from './../Service/Domain/produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaisProdutosPageRoutingModule } from './detais-produtos-routing.module';

import { DetaisProdutosPage } from './detais-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaisProdutosPageRoutingModule
  ],
  declarations: [DetaisProdutosPage],
  providers: [
    ProdutoService,
    CartService
  ]
})
export class DetaisProdutosPageModule {}
