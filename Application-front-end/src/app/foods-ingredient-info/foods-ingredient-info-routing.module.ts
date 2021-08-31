import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsIngredientInfoComponent } from './foods-ingredient-info.component';

const routes: Routes = [{ path: '', component: FoodsIngredientInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsIngredientInfoRoutingModule { }
