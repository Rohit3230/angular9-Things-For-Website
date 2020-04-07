import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    loadChildren:()=> import('../app/components/tournament/tournament.module').then(m=>m.TournamentModule)
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
