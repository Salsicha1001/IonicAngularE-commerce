import { PedidoService } from './../Service/Domain/pedido.service';
import { CartService } from './../Service/Domain/cart.service';
import { ClienteService } from './../Service/Domain/cliente.service';
import { ClienteDTO } from './../models/clienteDTO.model';
import { EnderecoDTO } from './../models/EnderecoDTO.model';
import { CartItem } from './../models/cart-item.model';
import { PedidoDTO } from './../models/pedido.model';
import { NavParams, NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {
  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente: ClienteDTO;
  endereco: EnderecoDTO;
  codpedido: string;
  constructor(private route: ActivatedRoute, private router: Router,
    private navParams: NavParams,
    public navCtrl: NavController,
    public clienteService: ClienteService,
    public cartService: CartService,
    public pedidoService: PedidoService,
    public alertController: AlertController) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state === undefined) {
      this.navCtrl.navigateBack('cart');
    } else {
      this.pedido = nav.extras.state.pedido;

      console.log(this.pedido);
    }
    this.cartItems = this.cartService.getCart().items;

    this.clienteService.findById(this.pedido.cliente.id)
      .subscribe(response => {
        this.cliente = response as ClienteDTO;
        this.endereco = this.findEndereco(this.pedido.enderecoDeEntrega.id, response['enderecos']);
      },
        error => {
          this.navCtrl.navigateRoot('home');
        });
  } private findEndereco(id: string, list: EnderecoDTO[]): EnderecoDTO {
    let position = list.findIndex(x => x.id == id);
    return list[position];
  }


  total(): number {
    return this.cartService.total();
  }

  back() {
    this.navCtrl.navigateBack('cart');
  }

  home() {
    this.navCtrl.navigateRoot('categoria');
  }

  checkout() {
    this.pedidoService.insert(this.pedido)
      .subscribe(response => {
        this.cartService.createOrClearCart();
        this.presentAlertMultipleButtons();
        this.navCtrl.navigateRoot('categorias');
        
      },
        error => {
          if (error.status == 403) {
            this.navCtrl.navigateRoot('home');
          }
        });
  }

  private extractId(location: string): string {
    let position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Seu pedido foi confirmado com sucesso',
      backdropDismiss:false,
      buttons: ['ok']
    });

    await alert.present();
  }

}
