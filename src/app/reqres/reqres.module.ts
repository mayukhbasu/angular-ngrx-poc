import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqresComponent } from './reqres/components/reqres.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: ReqresComponent
  }
]

@NgModule({
  declarations: [
    ReqresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReqresModule { }
