import { CategoriaDTO } from './../../../models/categoria.dto';
import { API_CONFIG } from './../../../Config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService {

  constructor(public http: HttpClient) { }

  findAll(): Observable <CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${API_CONFIG.base_url}/categorias`);
  }
}
