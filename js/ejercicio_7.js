//Ejercicio 8
const PulgadaEnMetro=0.0254;
let PulgadasAPedir;
let CantMetros=Number.parseFloat(prompt('Ingresa la cantidad de metros a convertir:'));

PulgadasAPedir=CantMetros/PulgadaEnMetro
console.log(`Para ${CantMetros} metros se debe pedir : ${PulgadasAPedir} pulgadas`);
