import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService{
    
    public todos: Todo[] = [];
    constructor(){ }

    getAllTodos(): Todo[] {
        if(
            localStorage.getItem('localData') !== null
        ){
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('Second');
        }else{
         var todoArrayData = [
                {
                    id: 1,
                    title: 'Prof.',
                    salution: 'Mr.',
                    firstName: 'Rohit',
                    middleName: 'Singh',
                    lastName: 'Niranjan',
                    phone: '9098383230',
                    email: 'rsn3230@gmail.com'
                },
                {
                    id: 2,
                    title: 'Dr.',
                    salution: 'Mr.',
                    firstName: 'Mohit',
                    middleName: 'Singh',
                    lastName: 'Niranjan',
                    phone: '7503912321',
                    email: 'rohit@yogems.com'
                }
            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('First');
        }
        return this.todos;
    };


    saveTodo(todo): Todo {
        console.log('INIT saveTodo function********', todo);
        debugger;
        if(
            !todo.id
        ){
            this.todos = JSON.parse(localStorage.getItem('localData'));
            !this.todos || !this.todos ? this.todos = [] : '';
            todo.id = this.todos.length+1;
            this.todos.push(todo);
            localStorage.setItem('localData', JSON.stringify(this.todos));
        }else{
            this.todos = JSON.parse(localStorage.getItem('localData'));
            !this.todos || !this.todos ? this.todos = [] : '';
            for(var i =0; i<this.todos.length; i++){
                if(
                    this.todos[i].id == todo.id
                ){
                    this.todos[i] = todo;
                }
            }
            localStorage.setItem('localData', JSON.stringify(this.todos));
        }
        return todo;
    }

    getTodoById(id):Todo{
        console.log('INIT getTodoById function********', id);
        this.todos = JSON.parse(localStorage.getItem('localData'));

        return this.todos.filter(todo => todo.id === id).pop();
    }

    deleteTodoById(id){
        this.todos = JSON.parse(localStorage.getItem('localData'));
        for(var i = 0; i<this.todos.length; i++){
            if(
                this.todos[i].id === id
            ){
                this.todos.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(this.todos));
            }
        }
    }

    

}