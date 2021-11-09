import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  //necesito recibir este personaje como un input

  @Input() nuevo :Personaje ={
    nombre:'',
    poder:0
  }

  @Output() oneNuevoPersonaje : EventEmitter<Personaje> =new EventEmitter();
  //@Outout() es usado cuando el componente
  //hijo quiere emitir un componente al padre


 



  agregar(){

     //mandando el mensaje al padre
    this.oneNuevoPersonaje.emit(this.nuevo);

    console.log(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }



}
