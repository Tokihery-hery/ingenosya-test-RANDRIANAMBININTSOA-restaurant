import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceManagmentRoutingModule } from './price-managment-routing.module';
import { PriceManagmentComponent } from './price-managment.component';


@NgModule({
  declarations: [
    PriceManagmentComponent
  ],
  imports: [
    CommonModule,
    PriceManagmentRoutingModule
  ]
})
export class PriceManagmentModule { }
