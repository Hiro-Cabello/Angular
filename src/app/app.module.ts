import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
/*
Tarea implementar con modulo el componente contador que a sido comentado
*/

import { HeoresModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contadors.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
  ],

  //Aqui van todos los modulos
  imports: [
    BrowserModule,
    HeoresModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
