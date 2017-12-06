import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'conversor'
})

export class ConversorPipe implements PipeTransform{
    transform(var1, var2){
        let num1=parseInt(var1);
        let num2=parseInt(var2);

        let result="La multiplicacion de "+num1+" por "+num2+" es igual a: "+(num1*num2);

        return result;
    }
}