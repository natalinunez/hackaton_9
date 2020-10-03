//Ejercicio 11
let ContadoDesaprobado=0;
let ContadorAprobado=0;

let NumeroAlumnos=Number.parseInt(prompt('Ingresa el número de alumnos:'));
for (var i = 1; i <=NumeroAlumnos; i++) 
{
    let nota=prompt(`Ingresa la nota ${i}`);

    if(nota<=10)
    {
        ContadoDesaprobado=ContadoDesaprobado+1;
    }
    else
    {
        ContadorAprobado=ContadorAprobado+1;
    }
}
console.log(`Cantidad de Desaprobados: ${ContadoDesaprobado} Cantidad de Aprobados: ${ContadorAprobado}`);

