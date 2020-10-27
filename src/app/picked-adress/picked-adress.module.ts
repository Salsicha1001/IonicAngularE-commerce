import { CartService } from './../Service/Domain/cart.service';
import { ClienteService } from './../Service/Domain/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickedAdressPageRoutingModule } from './picked-adress-routing.module';

import { PickedAdressPage } from './picked-adress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickedAdressPageRoutingModule
  ],
  declarations: [PickedAdressPage],
  providers: [
    ClienteService,
    CartService
  ]
})
export class PickedAdressPageModule {}
