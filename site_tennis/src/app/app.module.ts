import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { ClassementComponent } from './classement/classement.component';
import { LeClubComponent } from './le-club/le-club.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanningComponent,
    TournoiComponent,
    ClassementComponent,
    LeClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
