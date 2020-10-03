//Ejercicio 6
const PagoPorHora=15;
let HorasTrabajadasPorDia=Number.parseInt(prompt('Ingresa horas trabajado por día:'));
let DiasTrabajadoPorSemana=Number.parseInt(prompt('Ingresa días trabajado por semana:'));
let sueldo;
let PagoPorDia;
PagoPorDia=PagoPorHora*HorasTrabajadasPorDia;
sueldo=PagoPorDia*5;
console.log(`El pago semanal del trabajador pot los ${DiasTrabajadoPorSemana} días laborado es : ${sueldo}`);