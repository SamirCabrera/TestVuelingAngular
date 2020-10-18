import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [PlayersComponent, TeamsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class HomepageModule { }
