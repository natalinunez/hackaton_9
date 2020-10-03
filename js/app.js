//Ejercicio 1
const numero_1=10;
const numero_2=20;
let suma;
suma=numero_1+numero_2
console.log(`La suma de los dos números es: ${suma}`);


//Ejercicio 2
/*const exam_1=13;
const exam_2=14;
const exam_3=15;
const exam_4=20;
let suma;
let promedio;
suma=exam_1+exam_2+exam_3+exam_4;
promedio=suma/4
console.log(`El promedio de las cuatro notas es: ${promedio}`);
*/
//Ejercicio 3
/*const lado_1=13;
const lado_2=10;
let AreaRectangulo;
AreaRectangulo=lado_1*lado_2;
console.log(`El área del rectángulo es: ${AreaRectangulo}`);

//Ejercicio 4
const base=13;
const altura=10;
let AreaTriangulo;
AreaTriangulo=(base*altura)/2;
console.log(`El área del rectángulo es: ${AreaTriangulo}`);

//Ejercicio 5
const radio=13;
let AreaCirculo;
AreaCirculo=(Math.pow(radio,2))*Math.PI;
console.log(`El área del rectángulo es: ${AreaCirculo}`);
*/
//Ejercicio 6
/*const PagoPorHora=15;
const HorasTrabajadasPorDia=9;
const DiasTrabajadoPorSemana=5
let sueldo;
let PagoPorDia;
PagoPorDia=PagoPorHora*HorasTrabajadasPorDia;
sueldo=PagoPorDia*5;
console.log(`El sueldo del trabajador por semana es: ${sueldo}`);
*/
//Ejercicio 8
/*const TipoCambio=3.67;
const SolesPeruano=100;
let ImporteEnDolares;

ImporteEnDolares=SolesPeruano/TipoCambio;
console.log(`Los ${SolesPeruano} soles equivalen a: ${ImporteEnDolares} dólares`);

//Ejercicio 9
const nombre='Andres';
const AnioNacimiento=1995;
let fecha=new Date();
let AnioActual=fecha.getFullYear();
let edad=AnioActual-AnioNacimiento;

console.log(`${AnioActual}`);
console.log(`El candidato ${nombre} tiene: ${edad} años`);*/

//Ejercicio 10
/*const nombre_1='Andres';
const nombre_2='Laura';
const nombre_3='Juan';
const edad_1=10;
const edad_2=12;
const edad_3=20;

let edadMenor

if (edad_1 < edad_2 && edad_1 < edad_3) { 
    edadMenor=edad_1;
    nombre=nombre_1;
 } 
 else { 
    if (edad_2 < edad_1 && edad_2 < edad_3) {
        edadMenor=edad_2;
        nombre=nombre_2;
    }
    else{
        edadMenor=edad_3;
        nombre=nombre_3;        
    }
}
console.log(`${nombre} es el menor y tiene: ${edadMenor} años`);*/

//Ejercicio 11
const AniosTrabajados=4;
const nombre='Jose';

let bono;
switch (AniosTrabajados) {
    case 1:
        bono=100;
        break;
    case 2:
        bono=200;
        break;
    case 3:
        bono=300;
        break;
    case 4:
        bono=400;
        break;
    case 5:
        bono=500;
        break;              
    default:
        bono=1000;
  }
console.log(`El trabajador ${nombre} ha laborado ${AniosTrabajados} años y le corresponde un bono: ${bono} dolares`);

//Ejercicio 12
const SalarioInicial=1500;

let IncrementoAnual;
let SalarioConIncre=0;
let SalarioAcumulado=0;

for (var i = 1; i <=6; i++) {
    if(i=1)
    {
        IncrementoAnual=0.1*SalarioInicial;
        SalarioConIncre=SalarioInicial+IncrementoAnual;
        console.log(`Su salario durante el año ${i} es ${SalarioConIncre} dolares`);
    }
    else
    {
        IncrementoAnual=0.1*SalarioConIncre;
        SalarioConIncre=SalarioConIncre+IncrementoAnual;
        console.log(`Su salario durante el año ${i} es ${SalarioConIncre} dolares`);
    }
    SalarioAcumulado=SalarioAcumulado+SalarioConIncre;
 }

 console.log(`Su salario durante durante los 6 años es: ${SalarioAcumulado} dolares`);


//console.log(typeof(suma));
//const logeado=true;
//let edad;//esta variable no esta declarada
/*let edad=null;
console.log(edad);*/

/*const arrayNombres=[1,2,3,'Naty',20.5];
console.log(arrayNombres);

//Se puede re-declarar con VAR
/*var nombre ='naty';
nombre='DC';
var nombre='20';
console.log(nombre);*/

//clase viernes
/*const nombre='natalia';
const apellido='nuñez';
/*console.log(nombre.length);
console.log(nombre.indexOf('a'));
console.log(nombre.includes(t));*/
//console.log(nombre.concat(apellido));
//console.log('Nombres:'+nombre+' '+apellido);
//template string
//console.log(`${nombre} ${apellido}`);