import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../players.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    
  }

}
