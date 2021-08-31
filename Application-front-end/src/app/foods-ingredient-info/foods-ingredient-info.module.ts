import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsIngredientInfoRoutingModule } from './foods-ingredient-info-routing.module';
import { FoodsIngredientInfoComponent } from './foods-ingredient-info.component';


@NgModule({
  declarations: [
    FoodsIngredientInfoComponent
  ],
  imports: [
    CommonModule,
    FoodsIngredientInfoRoutingModule
  ]
})
export class FoodsIngredientInfoModule { }
