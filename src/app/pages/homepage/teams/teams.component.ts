import { Component, OnInit } from '@angular/core';
import { PlayerModel } from 'src/app/models/player.model';
import { TeamModel } from 'src/app/models/team.model';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public panelOpenState: boolean = false;
  public teams: Array<TeamModel>;
  public totalAvg: number = 0;
  public totalPoints: number = 0;
  public totalPlayers: number = 0;
  private players: Array<PlayerModel>;

  constructor(private readonly teamService: TeamService,
              private readonly playerService: PlayerService) { }

  public ngOnInit(): void {

    this.getTeams();
    this.getPlayers();
  }

  public teamSelected(idTeam: number): void {

    this.totalAvg = 0;
    this.totalPoints = 0;

    const teamPlayers: Array<PlayerModel> = this.players.filter(x => x.idTeam === idTeam);

    this.totalPlayers = teamPlayers.length;

    teamPlayers.forEach((player: PlayerModel) => {

      this.totalAvg += player.avg;
      this.totalPoints += player.points;
    });
  }

  private getTeams(): void {

    this.teamService.getTeams().subscribe((teams: Array<TeamModel>) => {

      this.teams = teams;
    });
  }

  private getPlayers(): void {

    this.playerService.getPlayers().subscribe((players: Array<PlayerModel>) => {

      this.players = players;
    });
  }
}
