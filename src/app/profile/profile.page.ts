import { CLienteDTO } from 'src/models/clienteDTO.model';
import { ClienteService } from './../Service/Domain/cliente.service';
import { StorageService } from './../Service/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {

  c: CLienteDTO;
  constructor(public storage: StorageService, private clientService: ClienteService) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clientService.findEmail(localUser.email).subscribe((u) => {
        this.c = u;
      });
    }
  }

}
