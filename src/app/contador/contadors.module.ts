import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    //Esto es para usarl fuera del modulo
    exports:[
       ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})


export class ContadorModule{

}
