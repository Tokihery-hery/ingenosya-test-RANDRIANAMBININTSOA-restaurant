import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceManagmentRoutingModule } from './price-managment-routing.module';
import { PriceManagmentComponent } from './price-managment.component';
import { MyNgModule } from 'src/app/myng/myng.module';
import {MaterialModule} from "src/app/material/material.module"
import { FoodsCatalogueModule } from 'src/app/reusable-component/foods-catalogue/foods-catalogue.module'
import { SearchBarModule } from 'src/app/reusable-component/search-bar/search-bar.module'
import { UploadFileModule } from 'src/app/restaurant/upload-file/upload-file.module'



@NgModule({
  declarations: [
    PriceManagmentComponent
  ],
  imports: [
    CommonModule,
    PriceManagmentRoutingModule,
    MyNgModule,
    MaterialModule,
    SearchBarModule,
    FoodsCatalogueModule,
    UploadFileModule

  ]
})
export class PriceManagmentModule { }
