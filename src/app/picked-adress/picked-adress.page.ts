import { CartService } from './../Service/Domain/cart.service';
import { ClienteService } from './../Service/Domain/cliente.service';
import { StorageService } from './../Service/storage.service';
import { NavController } from '@ionic/angular';
import { PedidoDTO } from './../models/pedido.model';
import { EnderecoDTO } from './../models/EnderecoDTO.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picked-adress',
  templateUrl: './picked-adress.page.html',
  styleUrls: ['./picked-adress.page.scss'],
})
export class PickedAdressPage implements OnInit {
  items: EnderecoDTO[];
  pedido: PedidoDTO;
  constructor(public navCtrl: NavController, 
    public storage: StorageService,
    public clienteService: ClienteService,
    public cartService: CartService) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findEmail(localUser.email)
        .subscribe(response => {
          this.items = response['enderecos'];

          let cart = this.cartService.getCart();

          this.pedido = {
            cliente: {id: response['id']},
            enderecoDeEntrega: null,
            pagamento: null,
            itens : cart.items.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}})
          }
        },
        error => {
          if (error.status == 403) {
          this.navCtrl.navigateForward('home');
          }
        });
    }
    else {
this.navCtrl.navigateForward('home');
    }
  }
  nextPage(item: EnderecoDTO) {
    this.pedido.enderecoDeEntrega = {id: item.id};
    this.navCtrl.navigateForward(['payment', {pedido: this.pedido}]);
  }

}
