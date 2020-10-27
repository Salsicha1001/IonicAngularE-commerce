import { ClienteService } from './../Service/Domain/cliente.service';
import { PedidoService } from './../Service/Domain/pedido.service';
import { CartService } from './../Service/Domain/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController, NavParams } from '@ionic/angular';

import { OrderConfirmationPageRoutingModule } from './order-confirmation-routing.module';

import { OrderConfirmationPage } from './order-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderConfirmationPageRoutingModule
  ],
  declarations: [OrderConfirmationPage],
  providers: [
    CartService,
    PedidoService,
    ClienteService,
    NavParams
  ]
})
export class OrderConfirmationPageModule {}
