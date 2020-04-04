import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {

  mailObj: any = {};

  constructor(
    // private route: ActivatedRoute,
    public _httpService: HttpService,
  ) { }

  ngOnInit(): void {
    // debugger;
    this.mailObj.getTournamentListAPIStatus = 'waiting';
    const url: string = this._httpService.getTournamentList(0, 6);
    let body:any={"filters":{"isOnline":true},"projectionKeys":{}};
    this._httpService.post(url, {}, body)
      .subscribe(response => (this.mailObj.tournaments = response, this.mailObj.getTournamentListAPIStatus = 'success'),
        error => (this.mailObj.errorMessage = <any>error, this.mailObj.getTournamentListAPIStatus = 'failed'));
  }

}
