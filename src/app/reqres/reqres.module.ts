import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqresComponent } from './reqres/components/reqres.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ReqresModule { }
