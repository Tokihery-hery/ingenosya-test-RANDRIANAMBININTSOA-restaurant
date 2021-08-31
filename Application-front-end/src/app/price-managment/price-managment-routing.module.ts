import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceManagmentComponent } from './price-managment.component';

const routes: Routes = [{ path: '', component: PriceManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceManagmentRoutingModule { }
