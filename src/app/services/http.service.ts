import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
// import { map } from "rxjs/operators";


import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: Http,
    private _Helpers: UtilService,
   // private _headers : Headers
  ) { }

  getTournamentList(po, pl) { return this._Helpers.getBaseUrl()+'user/tournamentNew/getTournaments/?po='+(po ? po : 0)+'&pl='+(pl ? pl : 10000)};
  getLiveMatchScoreUrl() { return 'http://10.99.100.167:3000/api/live/getLiveMatches/' };
  getTournamentDetailApiURL(tournamentUniqNamne: string) { return this._Helpers.getBaseUrl() + 'user/tournament/?eventName=' + tournamentUniqNamne };
  liveMatchApi(tournamentUniqhash: string) { return this._Helpers.getBaseUrl() + 'user/match/liveAndUpcoming/?tournamentHash=' + tournamentUniqhash }

  get(url: any, header: any): Observable<any[]> {
    header ? header : {};
    return this._http.get(url, header)
      .map((response: Response) => <any[]>response.json())
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  };

  getHomeFeed(url: any, header: any): Observable<any> {
    let dataResponse: any;
    header = { 'Accept': 'application/xml' };
    return this._http.get(url, {
      headers: header
    })
      .map((response: Response) => <any>response)
  };

  post(url: string, header : any,  body :  any): Observable<any[]> {
    header ? header : {};
    header['Content-Type'] = 'application/json';
    return this._http.post(url, body, header)
      .map((response: Response) => <any[]>response.json().data)
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  };

  put(url: string, body : any, header : any): Observable<any[]> {
    header ? header : {};
    header.append('Content-Type', 'application/json');
    return this._http.put(url, header, body)
      .map((response: Response) => <any[]>response.json().data)
      //.do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  };

  delete(url: string, body, header): Observable<any[]> {
    header ? header : {};
    header.append('Content-Type', 'application/json');
    return this._http.get(url, header)
      .map((response: Response) => <any[]>response.json().data)
      .catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
