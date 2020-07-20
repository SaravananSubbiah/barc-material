import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcResponsiveComponent } from './barc-responsive/barc-responsive.component';
const routes: Routes = [
  {
    path: 'barc-responsive',
    component: BarcResponsiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
