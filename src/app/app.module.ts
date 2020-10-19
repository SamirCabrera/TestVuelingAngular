import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlayersComponent } from './pages/homepage/players/players.component';
import { TeamsComponent } from './pages/homepage/teams/teams.component';
import { DialogComponent } from './pages/homepage/teams/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlayersComponent,
    TeamsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
