
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoService } from './services/todo.service';

import { HttpService } from './services/http.service';
import { UtilService } from './services/util.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
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
  // exports : [
  //   AppComponent,
  //   HeaderComponent,
  //   SquarePipe
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
