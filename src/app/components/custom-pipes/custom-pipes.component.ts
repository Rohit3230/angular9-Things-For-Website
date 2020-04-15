import { Component, OnInit } from '@angular/core';
// import { SquarePipe } from '../../pipes/square.pipe'

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  values : any = [1,2];

  valueForSquare : number = 2;

  valueForPower : number = 5;

  constructor() { }

  ngOnInit(): void {

  }

}
