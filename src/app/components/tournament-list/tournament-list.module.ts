import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TournamentListRoutingModule } from './tournament-list-routing.module';
import { TournamentListComponent } from './tournament-list.component';
import { HttpService } from '../../services/http.service';
import { UtilService } from '../../services/util.service';


@NgModule({
  declarations: [
    TournamentListComponent
  ],
  imports: [
    CommonModule,
    TournamentListRoutingModule,
    HttpModule,
    // Headers
  ],
  exports : [
    TournamentListComponent
  ],
  providers : [
    // Headers,
    HttpService,
    UtilService    
  ]
})
export class TournamentListModule { }
