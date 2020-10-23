import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public menu: MenuController) { }

  ngOnInit() {


  }
  login() {
    this.navCtrl.navigateForward('categoria');

  }
ionViewWillEnter(){
  this.menu.enable(false);
}
ionViewDidLeave(){
  this.menu.enable(true);
 }
}
