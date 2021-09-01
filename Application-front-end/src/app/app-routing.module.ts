import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sale-order',
    pathMatch: 'full'
  },
  { path: 'foods-managment', loadChildren: () => import('./foods-managment/foods-managment.module').then(m => m.FoodsManagmentModule), data: {animation: 'FoodPage'} },
  { path: 'upload', loadChildren: () => import('./restaurant/upload-file/upload-file.module').then(m => m.UploadFileModule) },
  { path: 'visualize', loadChildren: () => import('./reusable-component/visualize-ingredient-needs/visualize-ingredient-needs.module').then(m => m.VisualizeIngredientNeedsModule) },
  { path: 'foods-catalogue', loadChildren: () => import('./reusable-component/foods-catalogue/foods-catalogue.module').then(m => m.FoodsCatalogueModule) },
  { path: 'sale-order', loadChildren: () => import('./sale-order/sale-order.module').then(m => m.SaleOrderModule) },
  { path: 'price-manage', loadChildren: () => import('./price-managment/price-managment.module').then(m => m.PriceManagmentModule) },
  // { path: 'foods-ingredient-info', loadChildren: () => import('./foods-ingredient-info/foods-ingredient-info.module').then(m => m.FoodsIngredientInfoModule), data: {animation: 'IngredientPage'} },
  // { path: 'price-managment', loadChildren: () => import('./price-managment/price-managment.module').then(m => m.PriceManagmentModule), data: {animation: 'PricePage'} },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), data: {animation: 'DashboardPage'} }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
