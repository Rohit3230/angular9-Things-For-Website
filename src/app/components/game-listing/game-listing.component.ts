import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.css']
})
export class GameListingComponent implements OnInit {

  @Input() parentData: any;
  mainObj: any = {};
  searchBy:string;

  constructor(
    public _httpService: HttpService,
  ) { }

  searchNow(inputString : string){
    console.log(inputString);
    !this.mainObj.gameListCopy ? this.mainObj.gameListCopy =  JSON.parse(JSON.stringify(this.mainObj.gameList)) : '';
    // let localArr = [];
    
    if(
      inputString
    ){
      this.mainObj.gameList = [];  
      (this.mainObj.gameListCopy).forEach(function(gameObject){
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
          this.mainObj.gameList.push(gameObject);
        }
      },this);
    }else{
      this.mainObj.gameList = this.mainObj.gameListCopy;
    }
    
  }

  filterList(filterType:string){
    if(
      filterType
      &&
      filterType != 'platform'
    ){
      this.mainObj.gameList = this.mainObj.gameList.sort((a, b) => (a.score > b.score) ? 1 : -1)
      if(
        filterType == 'Descending'
      ){
        this.mainObj.gameList = (this.mainObj.gameList).reverse();
      }
    }else{
      this.mainObj.gameList = this.mainObj.gameList.sort((a, b) => (a.platform > b.platform) ? 1 : -1)
    }

  }

  ngOnInit(): void {
    this.mainObj.getGameListAPIStatus = 'waiting';
    this.mainObj.gameList = [
      {
        "title": "Tekken Tag Tournament 2",
        "url": "/games/tekken-tag-tournament-2/xbox-360-124581",
        "platform": "Xbox 360",
        "score": 7.5,
        "genre": "Fighting",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Wild Blood",
        "url": "/games/wild-blood/iphone-139363",
        "platform": "iPhone",
        "score": 7,
        "genre": "",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Mark of the Ninja",
        "url": "/games/mark-of-the-ninja-135615/xbox-360-129276",
        "platform": "Xbox 360",
        "score": 9,
        "genre": "Action, Adventure",
        "editors_choice": "Y",
        "release_year": 2012
      },
      {
        "title": "Mark of the Ninja",
        "url": "/games/mark-of-the-ninja-135615/pc-143761",
        "platform": "PC",
        "score": 9,
        "genre": "Action, Adventure",
        "editors_choice": "Y",
        "release_year": 2012
      },
      {
        "title": "Home: A Unique Horror Adventure",
        "url": "/games/home-a-unique-horror-adventure/mac-20014750",
        "platform": "Macintosh",
        "score": 6.5,
        "genre": "Adventure",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Home: A Unique Horror Adventure",
        "url": "/games/home-a-unique-horror-adventure/pc-137135",
        "platform": "PC",
        "score": 6.5,
        "genre": "Adventure",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Avengers Initiative",
        "url": "/games/avengers-initiative/iphone-141579",
        "platform": "iPhone",
        "score": 8,
        "genre": "Action",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Way of the Samurai 4",
        "url": "/games/way-of-the-samurai-4/ps3-23516",
        "platform": "PlayStation 3",
        "score": 5.5,
        "genre": "Action, Adventure",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "JoJo's Bizarre Adventure HD",
        "url": "/games/jojos-bizarre-adventure/xbox-360-137717",
        "platform": "Xbox 360",
        "score": 7,
        "genre": "Fighting",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "JoJo's Bizarre Adventure HD",
        "url": "/games/jojos-bizarre-adventure/ps3-137896",
        "platform": "PlayStation 3",
        "score": 7,
        "genre": "Fighting",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Mass Effect 3: Leviathan",
        "url": "/games/mass-effect-3-leviathan/xbox-360-138918",
        "platform": "Xbox 360",
        "score": 7.5,
        "genre": "RPG",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Mass Effect 3: Leviathan",
        "url": "/games/mass-effect-3-leviathan/ps3-138915",
        "platform": "PlayStation 3",
        "score": 7.5,
        "genre": "RPG",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Mass Effect 3: Leviathan",
        "url": "/games/mass-effect-3-leviathan/pc-138919",
        "platform": "PC",
        "score": 7.5,
        "genre": "RPG",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Dark Souls (Prepare to Die Edition)",
        "url": "/games/dark-souls-prepare-to-die-edition/pc-131930",
        "platform": "PC",
        "score": 9,
        "genre": "Action, RPG",
        "editors_choice": "Y",
        "release_year": 2012
      },
      {
        "title": "Symphony",
        "url": "/games/symphony/pc-136470",
        "platform": "PC",
        "score": 7,
        "genre": "Shooter",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Bastion",
        "url": "/games/bastion/ipad-140874",
        "platform": "iPad",
        "score": 9,
        "genre": "Action, RPG",
        "editors_choice": "Y",
        "release_year": 2012
      },
      {
        "title": "Tom Clancy's Ghost Recon Phantoms",
        "url": "/games/tom-clancys-ghost-recon-online/pc-109114",
        "platform": "PC",
        "score": 7.5,
        "genre": "Shooter",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Thirty Flights of Loving",
        "url": "/games/thirty-flights-of-loving/pc-138374",
        "platform": "PC",
        "score": 8,
        "genre": "Adventure",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "Legasista",
        "url": "/games/legasista/ps3-127147",
        "platform": "PlayStation 3",
        "score": 6.5,
        "genre": "Action, RPG",
        "editors_choice": "N",
        "release_year": 2012
      },
      {
        "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
        "url": "/games/the-walking-dead-season-1-episode-3/mac-135875",
        "platform": "Macintosh",
        "score": 9,
        "genre": "Adventure",
        "editors_choice": "Y",
        "release_year": 2012
      }
    ];

    this.mainObj.getGameListAPIStatus = 'success';

    // const url: string = 'http://starlord.hackerearth.com/gamesext';
    // this._httpService.get(url, {})
    //   .subscribe(response => (this.mainObj.gameList = response, this.mainObj.getGameListAPIStatus = 'success'),
    //     error => (this.mainObj.errorMessage = <any>error, this.mainObj.getGameListAPIStatus = 'failed'));
  }

}
