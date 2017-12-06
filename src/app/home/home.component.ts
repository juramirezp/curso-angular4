import {Component} from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    // para que funcione el servicio
    providers: [RopaService]
})

export class HomeComponent{
    public titulo='pagina principal';
    public listaRopa=[];
    public nuevaPrenda;
    public fecha;

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha=new Date();
    }

    ngOnInit(){
        this.listaRopa=this._ropaService.getRopa();
        console.log(this.listaRopa);
        console.log(this._ropaService.prueba());
    }

    anadirPrenda(){
        this._ropaService.addRopa(this.nuevaPrenda);
    }

    eliminarPrenda(i){
        this._ropaService.deleteRopa(i);
    }
}