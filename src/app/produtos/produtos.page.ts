import { ProdutoService } from './../Service/Domain/produto.service';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { ProdutoDTO } from './../models/produtoDTO.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.css'],
})
export class ProdutosPage implements OnInit {
  items: ProdutoDTO[] = [];
  page: number = 0;
  id: any;
  constructor(public navCtrl: NavController,
    public router: ActivatedRoute,
    public produtoService: ProdutoService,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.router.params.subscribe(params => this.id = params['id'])
    this.loadData();

  }
  //Loading ate pegar todos os dados
  async loadData() {
    let loader = await this.presentLoading();
    this.produtoService.findByCategoria(this.id)
      .subscribe(response => {
        let start = this.items.length;
        this.items = this.items.concat(response['content']);
        let end = this.items.length - 1;
        loader.dismiss();
        console.log(this.page);
        console.log(this.items);
      },
        error => {
          loader.dismiss();
        });
  }




  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Aguarde..."
    });
    await loader.present();
    return loader;
  }

  doRefresh(refresher) {
    this.page = 0;
    this.items = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }
  detais(id) {
    this.navCtrl.navigateForward(['detais-produtos',{id:id}]);
}
}
