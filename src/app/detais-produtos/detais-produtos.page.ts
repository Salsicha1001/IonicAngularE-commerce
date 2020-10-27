import { CartService } from './../Service/Domain/cart.service';
import { ProdutoDTO } from './../models/produtoDTO.model';
import { ProdutoService } from './../Service/Domain/produto.service';
import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detais-produtos',
  templateUrl: './detais-produtos.page.html',
  styleUrls: ['./detais-produtos.page.scss'],
})
export class DetaisProdutosPage implements OnInit {
  item: ProdutoDTO;
  id: any;
  constructor(public navCtrl: NavController, 
    public router: ActivatedRoute,
    public cartService:CartService,
    public produtoService: ProdutoService) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.id = params['id'])
    this.produtoService.findById(this.id)
      .subscribe(response => {
        this.item = response;
          console.log(this.item)
      },
      error => {});
  }
  addToCart(produto: ProdutoDTO) {
    this.cartService.addProduto(produto);
    this.navCtrl.navigateForward('cart');
  }
  

}
