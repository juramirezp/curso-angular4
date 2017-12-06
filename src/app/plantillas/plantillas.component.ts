import {Component} from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{

    public titulo;
    public administrador;

    constructor(){
        this.titulo= 'plantillas ngTemplate';
        this.administrador= false;
    }
}