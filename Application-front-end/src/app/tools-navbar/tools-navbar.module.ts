import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsNavbarRoutingModule } from './tools-navbar-routing.module';
// import { ToolsNavbarComponent } from './tools-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    // ToolsNavbarComponent
  ],
  imports: [
    CommonModule,
    ToolsNavbarRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatDividerModule

  ],
})
export class ToolsNavbarModule { }
