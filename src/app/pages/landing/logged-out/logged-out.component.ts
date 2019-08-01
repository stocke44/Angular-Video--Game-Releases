import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.css']
})
export class LoggedOutComponent implements OnInit {

  constructor(public api:ApiService) { }
  public games;
  public tests ;
  
  display(){
    
    this.tests = this.api.get('games/?fields=name,genres.name,cover.url,popularity&order=popularity:desc&expand=genres&limit=50').subscribe(res =>{
      this.tests = res;
      console.log(this.tests);
      console.log(this.tests[1].name);
    })
  }
  
  ngOnInit() {

  }

}
