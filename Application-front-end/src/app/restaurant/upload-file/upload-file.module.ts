import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file.component';
import { SafePipe } from 'src/app/safe.pipe'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    // UploadFileComponent,
  ],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class UploadFileModule { }
