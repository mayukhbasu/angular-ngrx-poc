import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { ReqresModule } from './reqres/reqres.module';
import { OnChangeComponent } from './lifecycles/on-change/on-change.component';
import { ChildComponent } from './lifecycles/on-change/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    OnChangeComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReqresModule,
    ChangeDetectionModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
