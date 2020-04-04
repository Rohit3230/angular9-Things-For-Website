import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { TodoViewComponent } from '../todo-view/todo-view.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public todoViewDetail: Todo;
  public itemIndex: number;
  public isValid: boolean = true;

  closeResult: string;
  constructor(
    private router: Router,
    private todoService: TodoService,
    private modalService: NgbModal
  ) { }

  open(content) {
    debugger;
    // ls, xl, '', 
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', backdrop: 'static' }).result.then((result) => {
      debugger;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      debugger;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.loadAllTodoList();
  }

  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
  }

  editTodo(todo) {
    console.log('todo for update****', todo);
    debugger;
    this.router.navigate(['/todo-detail'], { queryParams: { id: todo.id } });
  }

  viewTodo(todo, todoIndex) {
    debugger;
    this.todoViewDetail = todo;
    this.itemIndex = todoIndex;
    // open('mymodal')
  }

  openPopup(todo, todoIndex) {
    debugger;
    this.todoViewDetail = todo;
    this.itemIndex = todoIndex;
  }

  manageSelectedTodo(eventObj, index) {
    debugger;
    console.log('eventObj***', eventObj, index);
    this.todos[index] = eventObj;
  }

  addNewTodo() {
    console.log('Add new todo****');
    debugger;
    this.router.navigate(['/todo-detail']);
  }

  deleteTodo(todoId) {
    this.todoService.deleteTodoById(todoId);
    this.loadAllTodoList();
  }

}
