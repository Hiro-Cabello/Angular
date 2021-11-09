import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
       HeroeComponent,
       ListadoComponent 
    ],
    //export es lo que quiero hacer publico fuera del componete
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeoresModule{

}
