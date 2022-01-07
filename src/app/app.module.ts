import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import {} from '@'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from  './app-routing.module'

import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule                                                                                                                                                                                 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
