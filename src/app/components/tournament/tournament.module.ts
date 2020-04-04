import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { HttpService } from '../../services/http.service';
import { UtilService } from '../../services/util.service';


@NgModule({
  declarations: [
    TournamentComponent
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    HttpModule
  ],
  providers:[
    HttpService,
    UtilService
  ],
  exports : [
    TournamentComponent
  ]
})
export class TournamentModule { }
