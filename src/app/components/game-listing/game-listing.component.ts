import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css']
})
export class GameListingComponent implements OnInit {

  @Input() parentData: any;
  mailObj: any = {};
  searchBy:string;

  constructor(
    public _httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.mailObj.getGameListAPIStatus = 'waiting';
    const url: string = 'http://starlord.hackerearth.com/gamesext';
    let body:any={"filters":{"isOnline":true},"projectionKeys":{}};
    this._httpService.get(url, {})
      .subscribe(response => (this.mailObj.gameList = response, this.mailObj.getGameListAPIStatus = 'success'),
        error => (this.mailObj.errorMessage = <any>error, this.mailObj.getGameListAPIStatus = 'failed'));
  }

  searchNow(inputString : string){
    console.log(inputString);
    !this.mailObj.gameListCopy ? this.mailObj.gameListCopy =  JSON.parse(JSON.stringify(this.mailObj.gameList)) : '';
    // let localArr = [];
    
    if(
      inputString
    ){
      this.mailObj.gameList = [];  
      (this.mailObj.gameListCopy).forEach(function(gameObject){
        if(
          inputString
          &&
          gameObject
          &&
          gameObject.title
          &&
          (gameObject.title).indexOf
          &&
          (gameObject.title).indexOf(inputString) != -1
        ){
          this.mailObj.gameList.push(gameObject);
        }
      },this);
    }else{
      this.mailObj.gameList = this.mailObj.gameListCopy;
    }
    
  }

  filterList(filterType:string){
    if(
      filterType
      &&
      filterType != 'platform'
    ){
      this.mailObj.gameList = this.mailObj.gameList.sort((a, b) => (a.score > b.score) ? 1 : -1)
      if(
        filterType == 'Descending'
      ){
        this.mailObj.gameList = (this.mailObj.gameList).reverse();
      }
    }else{
      this.mailObj.gameList = this.mailObj.gameList.sort((a, b) => (a.platform > b.platform) ? 1 : -1)
    }

  }

}
