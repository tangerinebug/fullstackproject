import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../players.service';

@Component({
  selector: 'app-adminplayers',
  templateUrl: './adminplayers.component.html',
  styleUrls: ['./adminplayers.component.css']
})
export class AdminplayersComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe((player) => {
      console.log(player);
    });
  }

}
