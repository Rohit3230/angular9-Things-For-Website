import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  actionArr : any = [];

  errorMsg : string = '';

  outPut : any;

  constructor() { }

  ngOnInit(): void {
  }

  setInput(number){
    debugger;
    if(
      !this.actionMode
    ){
      this.actionArr[0] = (this.actionArr[0] ? this.actionArr[0] : '')+''+number;
    }else{
      this.actionArr[1] = (this.actionArr[1] ? this.actionArr[1] : '')+''+number;
    }
    // if(
    //   number
    //   &&
    //   this.actionArr
    //   &&
    //   this.actionArr.length < 2
    // ){
    //   this.actionArr.push(number);
    // }else{
    //   this.errorMsg = 'You can put only 2 values';
    // }
    
  }

  perfomrDevide(){
    debugger;
    this.outPut = (this.actionArr[0]/this.actionArr[1]);
  }
  perfomrMulti(){
    this.outPut = (this.actionArr[0]*this.actionArr[1]);
  }
  perfomrPlus(){
    this.outPut = (this.actionArr[0]+this.actionArr[1]);
  }
  performMinus(){
    this.outPut = (this.actionArr[0]-this.actionArr[1]);
  }

  clearAll(){
    this.actionArr = [];
    this.actionMode = '';
    this.outPut = null;
  }

  actionOperation(){
    debugger;
    this.actionArr[0] = Number(this.actionArr[0]);
    this.actionArr[1] = Number(this.actionArr[1]);
    switch(this.actionMode){
      case '/':
        this.perfomrDevide()
      break;
      case '*':
          this.perfomrMulti()
      break;
      case '+':
          this.perfomrPlus()
      break;
      case '-':
          this.performMinus()
      break;
    }
  }

  actionMode : string = '';
  setAction(actionMode){
    if(
      !this.outPut
      &&
      this.actionArr[0]
    ){
      this.actionMode = actionMode; 
    }else if(
      this.outPut
      &&
      this.actionArr[0]
      &&
      this.actionArr[1]
    ){
      this.actionArr[0] = this.outPut;
      this.actionArr[1] = null;
      this.actionMode = actionMode; 
      this.outPut = null;
    }
  }

}
