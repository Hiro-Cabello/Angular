import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

/*
interface Personaje{
  nombre:string;
  poder:number;
}
*/

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})



export class MainPageComponent  { 

  personajes:Personaje[]=[
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    },
    {
      nombre:'Gohan',
      poder:1000
    }
  ];
 
 nuevo:Personaje={
  nombre:'Trunsk',
  poder:1700
 }

 agregarNuevoPersonaje(argumento:Personaje){
   console.log("Entro en la funcion")
   console.log(argumento)
   this.personajes.push(argumento)
 }

}
