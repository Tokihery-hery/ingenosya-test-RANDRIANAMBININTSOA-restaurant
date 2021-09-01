import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsCatalogueComponent } from './foods-catalogue.component';

const routes: Routes = [{ path: '', component: FoodsCatalogueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsCatalogueRoutingModule { }
