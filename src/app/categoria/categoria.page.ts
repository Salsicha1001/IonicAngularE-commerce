import { CategoriaService } from './../Service/Domain/categoria.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { CategoriaDTO } from '../models/categoria.dto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.css'],
})
export class CategoriaPage implements OnInit {
  items: CategoriaDTO[];
  constructor(private menu: MenuController, private categoriaService: CategoriaService
  ,private navCtrl:NavController) { }

  ngOnInit() {
    this.categoriaService.findAll().subscribe((u) => {
      this.items = u;
    });
  }
  showProdutos(id : string) {
    this.navCtrl.navigateForward(['produtos',{id:id}]);
  }

}
