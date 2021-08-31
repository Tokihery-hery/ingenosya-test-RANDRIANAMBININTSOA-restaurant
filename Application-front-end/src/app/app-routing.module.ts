import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'foods-managment', loadChildren: () => import('./foods-managment/foods-managment.module').then(m => m.FoodsManagmentModule), data: {animation: 'FoodPage'} },
  { path: 'foods-ingredient-info', loadChildren: () => import('./foods-ingredient-info/foods-ingredient-info.module').then(m => m.FoodsIngredientInfoModule), data: {animation: 'IngredientPage'} },
  { path: 'price-managment', loadChildren: () => import('./price-managment/price-managment.module').then(m => m.PriceManagmentModule), data: {animation: 'PricePage'} },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), data: {animation: 'DashboardPage'} }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
