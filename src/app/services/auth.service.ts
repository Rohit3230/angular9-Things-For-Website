import { Injectable }       from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(private router:Router) {
    }

    isUserLoggedIn(){
        return false;
    }

    setRedirectUrl(url : string){
        this.router.navigate([url]);
    }

    getLoginUrl(){
        return "/home"
    }
}