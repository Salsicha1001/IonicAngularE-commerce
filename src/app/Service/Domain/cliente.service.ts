import { StorageService } from './../storage.service';
import { API_CONFIG } from './../../../Config/api.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLienteDTO } from 'src/models/clienteDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private storage: StorageService) { }

  findEmail(email: string): Observable<CLienteDTO> {
    let token = this.storage.getLocalUser().token;
    let authHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get<CLienteDTO>(`${API_CONFIG.base_url}/clientes/email?value=${email}`,
    {'headers':authHeader});
  }
}
