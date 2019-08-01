import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage-service.service';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  

  constructor(public api:ApiService, private localStorageService:LocalStorageService) { }

  getGames(){

  }
  
}
