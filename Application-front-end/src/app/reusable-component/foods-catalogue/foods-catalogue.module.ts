import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsCatalogueRoutingModule } from './foods-catalogue-routing.module';
import { FoodsCatalogueComponent } from './foods-catalogue.component';

import {MaterialModule} from "src/app/material/material.module"
import {MyNgModule} from "src/app/myng/myng.module"



@NgModule({
  declarations: [
    FoodsCatalogueComponent
  ],
  imports: [
    CommonModule,
    FoodsCatalogueRoutingModule,
    MaterialModule,
    MyNgModule,
  ],
  exports:[
   FoodsCatalogueComponent
   ]
})
export class FoodsCatalogueModule { }
