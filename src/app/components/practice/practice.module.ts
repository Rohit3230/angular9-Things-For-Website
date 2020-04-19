import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';

@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
