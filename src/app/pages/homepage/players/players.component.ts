import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlayerModel } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  labelPosition: 'before' | 'after' = 'after';

  topping: FormControl;

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  public players: Array<PlayerModel>;

  constructor(private readonly playerService: PlayerService) { }

  public ngOnInit(): void {

    this.getPlayers();
  }

  private getPlayers(): void {

    this.playerService.getPlayers().subscribe((players: Array<PlayerModel>) => {

      this.players = players;
    });
  }
}
