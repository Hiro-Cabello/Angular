import {Component} from '@angular/core'


@Component({
    selector:'app-contador',//este es el name del selector que va buscar mi aplicacion angular

    template:`
    <h1>Hola Mundo</h1>
    <p>Esto es el titulo {{title}}</p>
    <h3>La base es {{base}}</h3>

    <button (click)="acumular(base)">
    + {{base}}
    </button>

    <span>
    {{numero}}
    </span>


    <button (click)="acumular(-base)">
    -{{base}}
    </button>
    `

})

export class ContadorComponent{
    title: string = 'Contador App';
    numero:number=10;
  
    //propiedad 
    base:number = 5;
  
    acumular(valor:number){
      this.numero+=valor;
    }
  
}