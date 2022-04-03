import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./reqres/reqres.module')
  .then(m => m.ReqresModule)},
  {path: 'change', loadChildren: () => import('./change-detection/change-detection.module')
  .then(m => m.ChangeDetectionModule)},
  {path: 'rest', loadChildren: () => import('./go-rest/go-rest.module')
  .then(m => m.GoRestModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
