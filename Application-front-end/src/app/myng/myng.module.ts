import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//layout module
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
  ],
  exports: [
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
  ]
})
export class MyNgModule { }

