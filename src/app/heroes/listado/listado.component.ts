import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes : string [] =['Spiderman','Ironman','Thor','CapAmerica'];
  heroeBorrado:string='';
   borrarHeroe(){
    //console.log('Borrando')
    /*La implementacion de los metodos son solo jsvascripts */
    const heroeBorrado= this.heroes.shift() || '';//Quiere decir que devuelve un valor o un ''
    this.heroeBorrado=heroeBorrado;
    console.log(heroeBorrado)
  
  }

}

