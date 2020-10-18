import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public tiles: any

  constructor() { }

  ngOnInit(): void {
    this.tiles = [
      {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
      {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
      {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    ];
  }

}
