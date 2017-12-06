import {Injectable} from '@angular/core';

@Injectable()

export class RopaService{
    public nombre_prenda='jeans';
    public coleccion_ropa=['pantalones', 'polera'];

    prueba(){
        return this.nombre_prenda;
    }

    addRopa(prenda:string){
        this.coleccion_ropa.push(prenda);
        
        return this.getRopa();
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index, 1);

        return this.getRopa();
    }

    getRopa(){
        return this.coleccion_ropa;
    }

}