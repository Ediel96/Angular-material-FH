import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroes',
    loadChildren:() => import('./heroes/heroes-routing.module').then(m => m.HeroesRoutingModule)
  },
  {
    path:'404',
    component:ErrorPagesComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
    
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }