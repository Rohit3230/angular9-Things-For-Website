import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { HttpService } from '../../services/http.service';


@NgModule({
  declarations: [
    TournamentComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ],
  providers:[
    HttpService
  ],
  exports : [
    TournamentComponent
  ]
})
export class TournamentModule { }
