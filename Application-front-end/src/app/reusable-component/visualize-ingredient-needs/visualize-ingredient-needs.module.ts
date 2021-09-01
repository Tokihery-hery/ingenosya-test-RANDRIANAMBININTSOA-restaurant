import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizeIngredientNeedsRoutingModule } from './visualize-ingredient-needs-routing.module';
import { VisualizeIngredientNeedsComponent } from './visualize-ingredient-needs.component';
import {MaterialModule} from "src/app/material/material.module"
import {MyNgModule} from "src/app/myng/myng.module"



import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'



@NgModule({
  declarations: [
    // VisualizeIngredientNeedsComponent
  ],
  imports: [
    CommonModule,
    VisualizeIngredientNeedsRoutingModule,
    MyNgModule,
    MaterialModule
  ]
})
export class VisualizeIngredientNeedsModule { }
