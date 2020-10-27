import { EstadoService } from './../Service/Domain/estado.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { CidadeService } from '../Service/Domain/cidade.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [SignupPage],
  providers: [
    CidadeService,
    EstadoService],
  
})
export class SignupPageModule {}
