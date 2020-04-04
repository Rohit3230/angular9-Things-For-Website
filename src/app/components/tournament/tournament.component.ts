import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  mailObj: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    public _httpService: HttpService,
  ) { }


  getTournamentDetail(uniqName: string) {
    this.mailObj.getTournamentListAPIStatus = 'waiting';
    const url: string = this._httpService.getTournamentDetailApiURL(uniqName);
    this._httpService.get(url, {})
      .subscribe(response => (this.mailObj.data = response, this.mailObj.getTournamentListAPIStatus = 'success'),
        error => (this.mailObj.errorMessage = <any>error, this.mailObj.getTournamentListAPIStatus = 'failed'));
        // error => this.mailObj.errorMessage = <any>error);
  };

  // ngOnInit(): void {
  //   this.route.params.subscribe((params : Params) => {
  //     debugger;
  //     this.mailObj.tournamentUniqName = params['un'];
  //     this.getTournamentDetail(this.mailObj.tournamentUniqName);
  //   })
  // }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      debugger;
      this.mailObj.un = params['un'];
      if (this.mailObj.un !== undefined) {
        this.getTournamentDetail(this.mailObj.un);
      } else {
            // this.todoId = null;
      }
    }); 
  }

}
