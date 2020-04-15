import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentRoutingModule } from './ng-content-routing.module';
import { NgContentComponent } from './ng-content.component'


@NgModule({
  declarations: [
    NgContentComponent
  ],
  imports: [
    CommonModule,
    NgContentRoutingModule
  ]
})
export class NgContentModule { }
