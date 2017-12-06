import {Component} from '@angular/core';
import {Empleados} from './empleados';

@Component({
    selector:'empleados',
    templateUrl: './empleados.component.html'
})
export class EmpleadosComponent{
    public nombreEmpleado='Juan Ramirez';

    public empleado:Empleados;

    ngOnInit(){
         this.empleado=new Empleados('Juan', 23);
    }
}