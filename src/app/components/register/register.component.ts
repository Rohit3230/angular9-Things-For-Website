import { Component, OnInit } from '@angular/core';
// import { ngForm } from "@angular/form";
import { user } from "../../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = <user>{};

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(user){

  }

}
