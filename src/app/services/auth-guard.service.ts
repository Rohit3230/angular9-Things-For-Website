import { Injectable }       from '@angular/core';
import { CanLoad, CanActivate, Route,	Router,
  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuardService implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {
  }
  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log('Url:'+ url);
    if (this.authService.isUserLoggedIn()) {
	return true; 
    }
    this.authService.setRedirectUrl(url);
    this.router.navigate([ this.authService.getLoginUrl() ]);
    return false;		
  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	let url: string = state.url;
        console.log('Url:'+ url);
        if (this.authService.isUserLoggedIn()) {
          return true; 
        }
	this.authService.setRedirectUrl(url);
	this.router.navigate([ this.authService.getLoginUrl() ]);
        return false;
  } 
} 