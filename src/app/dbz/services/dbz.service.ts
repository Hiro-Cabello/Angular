import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService{

    /*Ventajas de trabajar con servicios
        La logica se encuentra aqui
     
     */

    private _personajes:Personaje[]=[
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

      //rompe las referencias
      //desagrupa el array
      get personajes():Personaje[]{
          return [...this._personajes];
      }
     

    constructor(){
        console.log('Servicio inicializado')
    }

    agregarPersonaje(personaje:Personaje){
            this._personajes.push(personaje)
    }

}



