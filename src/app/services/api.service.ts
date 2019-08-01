import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiEndPoint:string='https://api-v3.igdb.com/';

  constructor(private http:HttpClient) { }


  
  get(url:string):Observable<Object>{

    let proxy = "https://cors-anywhere.herokuapp.com/";
    let header = new HttpHeaders({
      'accept':'application/json',
      'user-key':'4b0e85298c5af2421d962b75c64d6170',
      
    });
    
    return this.http.post(proxy+this.apiEndPoint+url,null,{headers:header});
  }  

}
