import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage-service.service';
import {igdb} from 'igdb-api-node';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public client = igdb('4b0e85298c5af2421d962b75c64d6170');

  constructor(public api:ApiService, private localStorageService:LocalStorageService) { }

  getGames(){
    const response = igdb().fields('name,movies,age') .limit(50) .offset(10) .sort('name') .request('/games'); 
    console.log(response);
  }

  

 
  
}
