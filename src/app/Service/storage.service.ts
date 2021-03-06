import { Cart } from './../models/cart.model';
import { STORAGE_KEY } from './../../Config/storage_key.config';
import { LocalUser } from '../models/local_user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  

  getLocalUser(): LocalUser{
    let usr = localStorage.getItem(STORAGE_KEY.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
    
  }
  setLocalUser(obj:LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEY.localUser);
    } else {
      localStorage.setItem(STORAGE_KEY.localUser, JSON.stringify(obj));
    }

  }
  
  getCart() : Cart {
    let str = localStorage.getItem(STORAGE_KEY.cart);
    if (str != null) {
        return JSON.parse(str);
    }
    else {
        return null;
    }
}

setCart(obj : Cart) {
    if (obj != null) {
        localStorage.setItem(STORAGE_KEY.cart, JSON.stringify(obj));
    } 
    else {
        localStorage.removeItem(STORAGE_KEY.cart);
    }
}
}
