import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CaptionModel } from 'src/app/models/caption.model';
import { PlayerModel } from 'src/app/models/player.model';
import { TeamModel } from 'src/app/models/team.model';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { DialogComponent } from './dialog/dialog.component';

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
  public captions: Array<CaptionModel>;
  public teamPlayers: Array<PlayerModel>;

  private players: Array<PlayerModel>;

  constructor(private readonly teamService: TeamService,
              private readonly playerService: PlayerService,
              public dialog: MatDialog) { }

  public ngOnInit(): void {

    this.getTeams();
    this.getPlayers();
    this.intializeCaption();
  }

  public teamSelected(idTeam: number): void {

    this.totalAvg = 0;
    this.totalPoints = 0;

    const teamPlayers: Array<PlayerModel> = this.players.filter(x => x.idTeam === idTeam);
    this.teamPlayers = teamPlayers;

    this.totalPlayers = teamPlayers.length;

    teamPlayers.forEach((player: PlayerModel) => {

      this.totalAvg += player.avg;
      this.totalPoints += player.points;
    });
  }

  public viewTeamPlayers(): void {
    const dialogRef = this.dialog.open(DialogComponent, {height:'80%',width:'80%', data: this.teamPlayers});

    dialogRef.afterClosed().subscribe(result => {
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

  private intializeCaption(): void {
    this.captions = [
      {
        icon: 'sports_soccer',
        title: 'Avg total del equipo',
        description: 'El Avg del equipo es la suma del avg de cada jugador en el equipo dividido entre entre la cantidad de jugadores'
      },
      {
        icon: 'stars',
        title: 'Puntos totales del equipo',
        description: 'Los puntos del equipo es la suma de todos los puntos de cada jugador en el equipo dividido entre entre la cantidad de jugadores'
      },
      {
        icon: 'perm_identity',
        title: 'Cantidad de jugadores en el equipo',
        description: 'Es la suma total de cuanto jugadores hay'
      }
    ]
  } 
}
