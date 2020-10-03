//Ejercicio 2
let suma_1;
let promedio;

let exam_1=Number.parseFloat(prompt('Ingresa examen 1:'));
let exam_2=Number.parseFloat(prompt('Ingresa examen 2:'));
let exam_3=Number.parseFloat(prompt('Ingresa examen 3:'));
let exam_4=Number.parseFloat(prompt('Ingresa examen 4:'));

suma_1=exam_1+exam_2+exam_3+exam_4;
promedio=suma_1/4
console.log(`El promedio de los exámenes ${exam_1},${exam_2},${exam_3} y ${exam_4} es: ${promedio}`);