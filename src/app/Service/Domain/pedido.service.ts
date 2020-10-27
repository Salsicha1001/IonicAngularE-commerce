import { API_CONFIG } from './../../../Config/api.config';
import { PedidoDTO } from './../../models/pedido.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn:'root'
})
export class PedidoService {

  constructor(public http: HttpClient) {
  }

  insert(obj: PedidoDTO) {
    return this.http.post(
      `${API_CONFIG.base_url}/pedidos`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}