import { ClienteDTO } from '../models/clienteDTO.model';
import { ClienteService } from './../Service/Domain/cliente.service';
import { StorageService } from './../Service/storage.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {

  c: ClienteDTO;
  constructor(public storage: StorageService, private clientService: ClienteService, private navctrl: NavController) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clientService.findEmail(localUser.email).subscribe((u) => {
        this.c = u as ClienteDTO;
      },
        error => {
          if (error.status === 403) {
            this.navctrl.navigateRoot('/login');
          }

        });
    } else {
      this.navctrl.navigateRoot('/login');
    }

  }

}
