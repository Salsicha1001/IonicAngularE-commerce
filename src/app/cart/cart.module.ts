import { ProdutoService } from './../Service/Domain/produto.service';
import { CartService } from './../Service/Domain/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule
  ],
  declarations: [CartPage],
  providers: [
    CartService,
    ProdutoService
  ]
})
export class CartPageModule {}
