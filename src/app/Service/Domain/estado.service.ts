import { EstadoDTO } from './../../models/EstadoDTO.model';
import { API_CONFIG } from './../../../Config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EstadoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<EstadoDTO[]>  {
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.base_url}/estados`);
    }
}