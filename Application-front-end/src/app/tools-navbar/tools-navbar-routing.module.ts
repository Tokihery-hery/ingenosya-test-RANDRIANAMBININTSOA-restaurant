import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsNavbarComponent } from './tools-navbar.component';

const routes: Routes = [{ path: '', component: ToolsNavbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsNavbarRoutingModule { }
