import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerModel } from 'src/app/models/player.model';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public teamLogo: Array<TeamModel>;

  constructor(@Inject(MAT_DIALOG_DATA) public players: Array<PlayerModel>,
              private readonly teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams(): void {

    this.teamService.getTeams().subscribe((teams: Array<TeamModel>) => {

      this.getLogo(teams);

    });
  }

  private getLogo(teams: Array<TeamModel>): void {

    if (this.players.length > 0) {
      const team: any = teams.filter(x => x.id === this.players[0].idTeam);
      this.teamLogo = team
    }
  }

}
