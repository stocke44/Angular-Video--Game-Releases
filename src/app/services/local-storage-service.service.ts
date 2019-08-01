import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  get(key){
    return JSON.parse(localStorage.getItem(key));
  }
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }
}
