import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

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

//personajes:Personaje[]=[];
 
 nuevo:Personaje={
  nombre:'Trunsk',
  poder:1700
 }
/*
 get personajes():Personaje[]{
   return this.dbzService.personajes;
 }
*/
/*
 agregarNuevoPersonaje(argumento:Personaje){
 
   this.personajes.push(argumento)
 }
 */
/*Constructor de servicios */

/*Si ya hay un servicio inicializado por ende si lo creo que otro lado
no se duplicara el servicio asi que solo sera uno*/
 constructor(){
   //this.personajes = this.dbzService.personajes;
 }

}
