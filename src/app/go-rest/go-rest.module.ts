import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormInterceptor } from './services/form.interceptor';
import { ColorChangeDirective } from './directives/color-change.directive';
import { StoreModule } from '@ngrx/store';
import { personReducers } from './store/userReducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffect } from './effects/person.effect';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  }
]


@NgModule({
  declarations: [
    FormComponent,
    ColorChangeDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('persons', personReducers),
    EffectsModule.forFeature([PersonEffect]),
    RouterModule.forChild(routes)
  ],
  providers: [FormService,
    { provide: HTTP_INTERCEPTORS, useClass: FormInterceptor, multi: true }]
})
export class GoRestModule { }
