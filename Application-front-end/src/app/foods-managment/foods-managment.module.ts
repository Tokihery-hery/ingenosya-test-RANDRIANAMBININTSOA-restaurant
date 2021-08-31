import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsManagmentRoutingModule } from './foods-managment-routing.module';
import { FoodsManagmentComponent } from './foods-managment.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    FoodsManagmentComponent
  ],
  imports: [
    CommonModule,
    FoodsManagmentRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule

  ]
})
export class FoodsManagmentModule { }
