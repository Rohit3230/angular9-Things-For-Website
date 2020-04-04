import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  getBaseUrl() {
    const url: string = 'https://api.yogems.com/api/';
    // const url : string = 'https://api.yogems.in/api/';
    const version: string = "v0/";
    let baseurl: string = url + version;
    return baseurl;
  }
}
