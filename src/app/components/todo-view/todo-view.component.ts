import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  // public todoDetail:Todo;
  @Input() todoDetail: Todo;
  @Input() itemIndex: number;
  @Output() itemSelected : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectForClass(todoDetail, itemIndex){
    debugger;
    todoDetail.isSelected ? todoDetail.isSelected = false : todoDetail.isSelected = true;
    todoDetail.itemIndex = itemIndex;
    this.itemSelected.emit(todoDetail);
  }

}