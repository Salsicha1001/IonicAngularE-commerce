import { ClienteDTO } from '../../models/clienteDTO.model';
import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../../Config/api.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private storage: StorageService) { }

  findEmail(email: string): Observable<ClienteDTO> {
   
    return this.http.get<ClienteDTO>(`${API_CONFIG.base_url}/clientes/email?value=${email}`);
  }
}
