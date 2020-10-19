import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { DialogComponent } from './teams/dialog/dialog.component';
import { DialogDetailPlayerComponent } from './players/dialog-detail-player/dialog-detail-player.component';

@NgModule({
  declarations: [PlayersComponent, TeamsComponent, DialogComponent, DialogDetailPlayerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  entryComponents: [DialogComponent]
})
export class HomepageModule { }
