import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public panelOpenState: boolean = false;
  public teams: Array<TeamModel>;

  constructor(private readonly teamService: TeamService) { }

  public ngOnInit(): void {

    this.getTeams();
  }

  private getTeams(): void {

    this.teamService.getTeams().subscribe((teams: Array<TeamModel>) => {

      this.teams = teams;
    });
  }

}
