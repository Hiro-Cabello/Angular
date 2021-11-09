import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string='Hiro';
    edad:number=18

    //como es un get bastaria solo con poner el nombre
    //nombreCapitalizado par que me muestre el nombre
    //convertido en mayuscula
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():String{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
          this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad=30
    }

}