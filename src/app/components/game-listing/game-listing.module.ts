import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GameListingRoutingModule } from './game-listing-routing.module';
import { GameListingComponent } from './game-listing.component'
import { HttpService } from '../../services/http.service';
import { UtilService } from '../../services/util.service';

@NgModule({
  declarations: [GameListingComponent],
  imports: [
    CommonModule,
    GameListingRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers:[
    HttpService,
    UtilService
  ]
})
export class GameListingModule { }
