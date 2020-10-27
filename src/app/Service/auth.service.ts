import { CartService } from './Domain/cart.service';
import { StorageService } from './storage.service';
import { LocalUser } from '../models/local_user';
import { API_CONFIG } from './../../Config/api.config';
import { credencialDTO } from '../models/credenciaisDTO.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private storageService: StorageService,
  private cartService:CartService) { }

  authenticate(creds: credencialDTO) {
    return this.http.post(`${API_CONFIG.base_url}/login`, creds, { observe: 'response', responseType: 'text' });
  }

  successLogin(authorizationValue: string) {
    let tok = authorizationValue.substring(7);
    let user: LocalUser = {
      token: tok, email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storageService.setLocalUser(user);
    this.cartService.createOrClearCart();
  }

  logout() {
    this.storageService.setLocalUser(null);
  }
  refreshToken() {
    return this.http.post(`${API_CONFIG.base_url}/auth/refresh_token`,{}, { observe: 'response', responseType: 'text' });
  }
}
