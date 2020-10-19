import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerModel } from 'src/app/models/player.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public players: Array<PlayerModel>) { }

  ngOnInit(): void {
  }

}
