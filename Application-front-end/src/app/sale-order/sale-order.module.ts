import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleOrderRoutingModule } from './sale-order-routing.module';
import { SaleOrderComponent } from './sale-order.component';

import { MyNgModule } from 'src/app/myng/myng.module';
import {MaterialModule} from "src/app/material/material.module"
import { FoodsCatalogueModule } from 'src/app/reusable-component/foods-catalogue/foods-catalogue.module'


@NgModule({
  declarations: [
    SaleOrderComponent,
    // FoodsCatalogueComponent
  ],
  imports: [
    CommonModule,
    SaleOrderRoutingModule,
    MyNgModule,
    MaterialModule,
    FoodsCatalogueModule
  ]
})
export class SaleOrderModule { }
