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
}
