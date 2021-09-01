import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http'


//module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ngModule
import {MyNgModule} from "./myng/myng.module"

//material module

import { MaterialModule } from "./material/material.module"
import {MatChipsModule} from '@angular/material/chips';


//component

import {ToolsNavbarComponent} from "./tools-navbar/tools-navbar.component";
import { UploadFileModule } from './restaurant/upload-file/upload-file.module';
import {VisualizeIngredientNeedsModule} from 'src/app/reusable-component/visualize-ingredient-needs/visualize-ingredient-needs.module'

import { FoodsCatalogueModule } from 'src/app/reusable-component/foods-catalogue/foods-catalogue.module'




@NgModule({
  declarations: [
    AppComponent,
    ToolsNavbarComponent,
    // FoodsCatalogueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MyNgModule,
    MaterialModule,
    HttpClientModule,
    UploadFileModule,
    VisualizeIngredientNeedsModule,
    FoodsCatalogueModule,

  ],
  providers: [HttpClientModule, HttpClient],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
