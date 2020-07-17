import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DoughnutComponent
  ],
  imports: [
    FormsModule,
    ChartsModule,
    CommonModule
  ],
  exports: [
    IncrementadorComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
