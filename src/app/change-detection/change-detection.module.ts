import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {'path': '', component: GrandparentComponent}
]

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    GrandparentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ChangeDetectionModule { }
