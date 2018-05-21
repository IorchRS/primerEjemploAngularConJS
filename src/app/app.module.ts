import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjemploJSComponent } from './ejemplo-js/ejemplo-js.component';
import { EjemploahoraComponent } from './ejemploahora/ejemploahora.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploJSComponent,
    EjemploahoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
