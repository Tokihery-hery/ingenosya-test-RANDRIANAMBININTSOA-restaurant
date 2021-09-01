import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizeIngredientNeedsComponent } from './visualize-ingredient-needs.component';

const routes: Routes = [{ path: '', component: VisualizeIngredientNeedsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizeIngredientNeedsRoutingModule { }
