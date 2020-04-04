import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  public todoId:string;
  public todoDetail = <Todo>{};
  public mode:string;

  constructor( 
    private todoService:TodoService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
      if (this.todoId !== undefined) {
            console.log(this.todoId);
            this.getTodoDetailById(this.todoId);
            this.mode = 'Edit';    
      } else {
            // this.todoId = null;
            console.log(this.todoId);
            this.todoDetail['id'] = 0;
            this.mode = 'Add';   
      }
    }); 
  }

  getTodoDetailById(todoId){
    this.todoDetail = this.todoService.getTodoById(parseInt(todoId));
  }

  onToDoSubmitForm(todoForm){
    console.log('INIT onTODOSubmitForm function*********', todoForm);
    debugger;
    if(
      !todoForm.valid
    ){
      return;
    }
    // if(
    //   !todoForm.firstName
    //   ||
    //   !todoForm.middleName
    //   ||
    //   !todoForm.lastName
    //   ||
    //   !todoForm.phone
    //   ||
    //   !todoForm.email
    // ){
    //   return;
    // }
    var todo = this.todoService.saveTodo(this.todoDetail);
    console.log('Saved todo info*****', todo);
    this.router.navigate(['/todo-list']);
  }

  cancle(){
    console.log('INIT cancle function*********');
    this.router.navigate(['/todo-list'])
  }

}
