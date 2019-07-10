import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrls: ['./logged-out.component.css']
})
export class LoggedOutComponent implements OnInit {

  constructor(public api:GamesService) { }

  ngOnInit() {
    // console.log(this.api.getGames());
  }

}
