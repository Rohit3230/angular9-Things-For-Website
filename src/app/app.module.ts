import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoService } from './services/todo.service';

import { HttpService } from './services/http.service';
import { UtilService } from './services/util.service';
import { HttpModule } from '@angular/http';


// import { TournamentComponent } from './components/tournament/tournament.component';
// import { TournamentListComponent } from './components/tournament-list/tournament-list.component';
// import { TodoViewComponent } from './components/todo-view/todo-view.component'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpModule,
    TodoService,
    HttpService,
    UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
