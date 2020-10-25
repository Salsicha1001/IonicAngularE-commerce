import { CategoriaService } from './../Service/Domain/categoria.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriaDTO } from 'src/models/categoria.dto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.css'],
})
export class CategoriaPage implements OnInit {
  items: CategoriaDTO[];
  constructor(private menu: MenuController, private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.findAll().subscribe((u) => {
      this.items = u;
    });
  }


}
