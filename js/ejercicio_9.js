//Ejercicio 9
let AnioNacimiento=Number.parseInt(prompt('Ingresa el año de nacimiento del candidato:'));
let fecha=new Date();
let AnioActual=fecha.getFullYear();
let edad=AnioActual-AnioNacimiento;

console.log(`El candidato tiene: ${edad} años`);

