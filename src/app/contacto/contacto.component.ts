import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo='contacto';
    public parametro;
    
    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){}

    // Funcions tradicional de callback no permite salir trabajar correctamente los datos, cambiar por arrow functons
    // ngOnInit(){
    //     this._route.params.forEach(function(params:Params){
    //         this.parametro=params['id'];
    //     });
    // }

    ngOnInit(){
        this._route.params.forEach((params:Params) =>{
            this.parametro=params['id'];
        });
    }

    redirigir(){
        this._router.navigate(['/contacto', 'pruebaDeID']);
    }
}