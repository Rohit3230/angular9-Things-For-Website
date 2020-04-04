import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoViewComponent } from '../todo-view/todo-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [TodoListComponent,TodoViewComponent], 
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class TodoListModule { }
