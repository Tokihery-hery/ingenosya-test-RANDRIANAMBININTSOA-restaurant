import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsNavbarRoutingModule } from './tools-navbar-routing.module';
import { ToolsNavbarComponent } from './tools-navbar.component';

import {MaterialModule} from "./material/material.module"
import {MyNgModule} from "./myng/myng.module"

@NgModule({
  declarations: [
    ToolsNavbarComponent
  ],
  imports: [
    CommonModule,
    ToolsNavbarRoutingModule,
    MyNgModule,
    MaterialModule
  ],
})
export class ToolsNavbarModule { }
