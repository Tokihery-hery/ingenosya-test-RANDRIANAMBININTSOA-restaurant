import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FoodsManagmentRoutingModule } from './foods-managment-routing.module';
import { FoodsManagmentComponent } from './foods-managment.component';
import { MyNgModule } from 'src/app/myng/myng.module';
import {MaterialModule} from "src/app/material/material.module"
import { SafePipe } from 'src/app/safe.pipe'
import { UploadFileComponent } from 'src/app/restaurant/upload-file/upload-file.component'
import {VisualizeIngredientNeedsComponent} from 'src/app/reusable-component/visualize-ingredient-needs/visualize-ingredient-needs.component'
import { FoodsCatalogueModule } from 'src/app/reusable-component/foods-catalogue/foods-catalogue.module'



@NgModule({
  declarations: [
    FoodsManagmentComponent,
    SafePipe,
    UploadFileComponent,
    VisualizeIngredientNeedsComponent,
    // FoodsCatalogueComponent
  ],
  imports: [
    CommonModule,
    MyNgModule,
    FoodsManagmentRoutingModule,
    MaterialModule,
    FoodsCatalogueModule

  ]
})
export class FoodsManagmentModule { }
