import { API_CONFIG } from './../../../Config/api.config';
import { CidadeDTO } from './../../models/CidadeDTO.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CidadeService {

  constructor(public http: HttpClient) {
  }

  findAll(estado_id: string): Observable<CidadeDTO[]> {
    return this.http.get<CidadeDTO[]>(`${API_CONFIG.base_url}/estados/${estado_id}/cidades`);
  }
}