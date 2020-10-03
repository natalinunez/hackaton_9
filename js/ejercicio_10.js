//Ejercicio 10
let nombre_1=prompt('Ingresa el nombre de la primera persona:');
let edad_1=Number.parseInt(prompt('Ingresa su edad :'));
let nombre_2=prompt('Ingresa el nombre de la segunda persona:');
let edad_2=Number.parseInt(prompt('Ingresa su edad :'));
let nombre_3=prompt('Ingresa el nombre de la tercera persona:');
let edad_3=Number.parseInt(prompt('Ingresa su edad :'));

let edadMenor;
let nombre_n;

if (edad_1 < edad_2 && edad_1 < edad_3) { 
    edadMenor=edad_1;
    nombre_n=nombre_1;
 } 
 else { 
    if (edad_2 < edad_1 && edad_2 < edad_3) {
        edadMenor=edad_2;
        nombre_n=nombre_2;
    }
    else{
        edadMenor=edad_3;
        nombre_n=nombre_3;        
    }
}
console.log(`${nombre_n} es el menor y tiene: ${edadMenor} años`);