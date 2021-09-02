import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SearchBarComponent } from './search-bar.component';

import {MaterialModule} from "src/app/material/material.module"
import {MyNgModule} from "src/app/myng/myng.module"



@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SearchBarRoutingModule,
    MaterialModule,
    MyNgModule
  ],
  exports:[
   SearchBarComponent
   ]
})
export class SearchBarModule { }
