import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqresComponent } from './reqres/components/reqres.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { userReducers } from './reqres/store/reducers';
import { UserService } from './reqres/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './reqres/effects/user.effects';

const routes: Routes = [
  {
    path: '',
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
    HttpClientModule,
    StoreModule.forFeature('users', userReducers),
    EffectsModule.forFeature([UserEffect]),
    RouterModule.forChild(routes)
  ],
  providers: [UserService]
})
export class ReqresModule { }
