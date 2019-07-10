import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiEndPoint:string='https://api-v3.igdb.com/games/';

  constructor(private http:HttpClient) { }

  get(url:string){
    return this.http.get(this.apiEndPoint+url);
  }  

}
