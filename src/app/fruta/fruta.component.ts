import {Component} from '@angular/core'; 

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'  
})
export class FrutaComponent{
    public nombreComponente='Componente de fruta';
    public listaFrutas='Naranja, Manzana';

    constructor(){
        console.log(this.listaFrutas);
    }
}