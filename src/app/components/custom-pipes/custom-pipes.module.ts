import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { CustomPipesComponent } from './custom-pipes.component';
import { CustomPipeWithSingleArgPipe } from '../../pipes/custom-pipe-with-single-arg.pipe'
import { SquarePipe } from "../../pipes/square.pipe"
import { PowerPipe } from "../../pipes/power.pipe"
import { PowerWithMultiParamsPipe } from "../../pipes/power-with-multi-params.pipe"
import { CustomPipeWithNumOfArgumentsPipe } from "../../pipes/custom-pipe-with-num-of-arguments.pipe"


@NgModule({
  declarations: [
    SquarePipe,
    PowerPipe,
    CustomPipeWithSingleArgPipe,
    PowerWithMultiParamsPipe,
    CustomPipeWithNumOfArgumentsPipe,
    CustomPipesComponent
  ],
  imports: [
    CommonModule,
    CustomPipesRoutingModule
  ],
  exports : [
    SquarePipe,
    PowerPipe,
    CustomPipeWithSingleArgPipe,
    PowerWithMultiParamsPipe,
    CustomPipeWithNumOfArgumentsPipe
  ]
})
export class CustomPipesModule { }
