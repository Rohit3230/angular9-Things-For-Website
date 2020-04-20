import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListingComponent } from './game-listing.component'


const routes: Routes = [{
  path:'',
  component : GameListingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameListingRoutingModule { }
