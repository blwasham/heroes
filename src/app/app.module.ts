// Defines AppModule, the root module that tells Angular how to assemble the
// application. Right now it declares only the AppComponent. Soon there will
// be more components to declare.

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
