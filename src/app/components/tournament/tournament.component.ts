import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  mailObj: any;

  constructor(
    private route: ActivatedRoute,
    public _httpService: HttpService,
  ) { }


  getTournamentDetail(uniqName: string) {
    const url: string = this._httpService.getTournamentDetailApiURL(uniqName);
    this._httpService.get(url, {})
      .subscribe(response => (this.mailObj.data = response),
        error => this.mailObj.errorMessage = <any>error);
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mailObj.tournamentUniqName = params['uniqName'];
      this.getTournamentDetail(this.mailObj.tournamentUniqName);
    })
  }

}
