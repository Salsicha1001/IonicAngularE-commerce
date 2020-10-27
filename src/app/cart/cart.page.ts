import { ProdutoDTO } from './../models/produtoDTO.model';
import { CartItem } from './../models/cart-item.model';
import { NavController } from '@ionic/angular';
import { ProdutoService } from './../Service/Domain/produto.service';
import { CartService } from './../Service/Domain/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items: CartItem[];
  constructor(  public navCtrl: NavController, 

    public cartService: CartService,
    public produtoService: ProdutoService) { }

  ngOnInit() {
    let cart = this.cartService.getCart();
    this.items = cart.items;
  }
  removeItem(produto: ProdutoDTO) {
    this.items = this.cartService.removeProduto(produto).items;
  }

  increaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartService.increaseQuantity(produto).items;
  }

  decreaseQuantity(produto: ProdutoDTO) {
    this.items = this.cartService.decreaseQuantity(produto).items;
  }

  total() : number {
    return this.cartService.total();
  }  

  goOn() {
   this.navCtrl.navigateForward('categoria');
  }

  checkout() {
   // this.navCtrl.nav('PickAddressPage');
  }
}
