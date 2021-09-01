import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceManagmentRoutingModule } from './price-managment-routing.module';
import { PriceManagmentComponent } from './price-managment.component';
import { MyNgModule } from 'src/app/myng/myng.module';
import {MaterialModule} from "src/app/material/material.module"
import { FoodsCatalogueModule } from 'src/app/reusable-component/foods-catalogue/foods-catalogue.module'
import { FoodsCatalogueComponent } from 'src/app/reusable-component/foods-catalogue/foods-catalogue.component'



@NgModule({
  declarations: [
    PriceManagmentComponent,
    // FoodsCatalogueComponent
  ],
  imports: [
    CommonModule,
    PriceManagmentRoutingModule,
    MyNgModule,
    MaterialModule,
    FoodsCatalogueModule

  ]
})
export class PriceManagmentModule { }
