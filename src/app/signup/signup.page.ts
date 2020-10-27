import { ClienteService } from './../Service/Domain/cliente.service';
import { EstadoService } from './../Service/Domain/estado.service';
import { CidadeDTO } from './../models/CidadeDTO.model';
import { EstadoDTO } from './../models/EstadoDTO.model';
import { NavController, AlertController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CidadeService } from '../Service/Domain/cidade.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  estados: EstadoDTO[];
  cidades: CidadeDTO[];
  
  constructor(private navCtrl: NavController,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private clienteService: ClienteService) {
 
  this.updateEstados()
  }
  form:FormGroup =  this.formBuilder.group({
    'nome': ['felipe', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
    'email': ['felumais14@gmail.com', [Validators.required, Validators.email]],
    'tipo': ['', [Validators.required]],
    'cpfOuCnpj': ['11496929608', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
    'senha': ['12345', [Validators.required]],
    'logradouro': ['tulipas', [Validators.required]],
    'numero': ['31', [Validators.required]],
    'complemento': ['21', []],
    'bairro': ['flores', []],
    'cep': ['090009000', [Validators.required]],
    'telefone1': ['99999999', [Validators.required]],
    'telefone2': ['', []],
    'telefone3': ['', []],
    'estadoId': [null, [Validators.required]],
    'cidadeId': [null, [Validators.required]]
  });



  signupUser() {


    this.clienteService.insert(this.form.value)
      .subscribe(response => {
        this.showInsertOk();
        this.navCtrl.navigateRoot('home')
      },
        error => { });
  }


  updateCidades() {
    let estado_id = this.form.value.estadoId
    console.log( this.form.value)
    if (estado_id != null) {
      this.cidadeService.findAll(estado_id)
        .subscribe(response => {
          this.cidades = response;
         
        },
          error => { });
    }
  }


  updateEstados() {
    this.form.value.cidadeId = null
    this.estadoService.findAll()
      .subscribe(response => {
        this.estados = response;
       
      },
        error => { });
  }





  async showInsertOk() {
    let alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    await alert.present();
  }
}
