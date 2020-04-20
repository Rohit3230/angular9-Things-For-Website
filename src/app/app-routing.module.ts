import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path : "",
    // redirectTo:"todo-list",
    redirectTo:"home",
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren:()=> import('../app/components/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'calculator',
    loadChildren:()=> import('../app/components/calculator/calculator.module').then(m=>m.CalculatorModule)
  },
  {
    path:'todo-list',
    loadChildren:()=> import('../app/components/todo-list/todo-list.module').then(m=>m.TodoListModule)
  },
  {
    path:'todo-detail',
    loadChildren:()=> import('../app/components/todo-detail/todo-detail.module').then(m=>m.TodoDetailModule)
  },
  {
    path:'events',
    loadChildren:()=> import('../app/components/tournament-list/tournament-list.module').then(m=>m.TournamentListModule)
  },
  {
    path:'event',
    loadChildren:()=> import('../app/components/tournament/tournament.module').then(m=>m.TournamentModule),
    // canLoad: [ AuthGuardService ]
  },
  {
    path:'custom-pipes',
    loadChildren:()=> import ('../app/components/custom-pipes/custom-pipes.module').then(m=>m.CustomPipesModule)
  },
  {
    path : 'ng-content',
    loadChildren:()=> import ('../app/components/ng-content/ng-content.module').then(m=>m.NgContentModule)
  },
  {
    path : 'gameList',
    loadChildren:()=> import ('../app/components/game-listing/game-listing.module').then(m=>m.GameListingModule)
  },
  {
    path : "practice",
    loadChildren:()=> import('../app/components/practice/practice.module').then(m=>m.PracticeModule)
  },
  {
    path : "login",
    loadChildren:()=>import('../app/components/login/login.module').then(m=>m.LoginModule)
  },
  {
    path : "register",
    loadChildren:()=>import('../app/components/register/register.module').then(m=>m.RegisterModule)
  }
  // {
  //   path:'event',
  //   loadChildren : '../app/components/tournament-list/tournament-list.module#TournamentListModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
