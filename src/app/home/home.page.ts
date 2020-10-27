import { StorageService } from './../Service/storage.service';
import { LocalUser } from '../models/local_user';
import { AuthService } from './../Service/auth.service';
import { credencialDTO } from '../models/credenciaisDTO.model';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {

  creds: credencialDTO = {
    email: '', senha: ''
  }
  constructor(public navCtrl: NavController, public menu: MenuController, private auth: AuthService
    , private storageService: StorageService) { }

  ngOnInit() {


  }
  login() {

    this.auth.authenticate(this.creds).subscribe((u) => {
      this.auth.successLogin(u.headers.get("Authorization"));
      this.navCtrl.navigateForward('categoria');
    })

    // console.log(this.creds)
    //  

  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    this.menu.enable(true);
  }
  ionViewDidEnter() {
    this.auth.refreshToken().subscribe((u) => {
      this.auth.successLogin(u.headers.get("Authorization"));
      this.navCtrl.navigateForward('categoria');
    })
  }

  singup() {
    this.navCtrl.navigateForward('signup');
}
}
