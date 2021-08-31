import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsManagmentComponent } from './foods-managment.component';

const routes: Routes = [{ path: '', component: FoodsManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsManagmentRoutingModule { }
