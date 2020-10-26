import { AuthService } from './Service/auth.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  pages: Array<{ title: string; component: string; }>;
  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService) {

    this.sideMenu();
    this.initializeApp();
  }
  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.pages = [
      { title: "Perfil", component: "profile" },
      { title: "Categoria", component: "categoria" },
      { title: "Logout", component: '' }
    ];
  }

  ButtonClick(s) {
    if ("Logout" === s) {
      this.authService.logout();
    }

  }

}
