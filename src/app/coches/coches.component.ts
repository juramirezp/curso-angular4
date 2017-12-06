import {Component} from '@angular/core';
import {Coche} from './coche';
import {PeticionesService} from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(private _peticionesService: PeticionesService){
        this.coche=new Coche("","",0);
        this.coches=[
            new Coche("Fiat","blanco",1990),
            new Coche("Fiat","azul",2090)
        ];
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos=result;
            },
            error => {
                var r = <any>error;
                console.log(r);
            }
        );
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche=new Coche("","",0);
    }
}