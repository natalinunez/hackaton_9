//Ejercicio 12
const SalarioInicial=1500;

let IncrementoAnual=0;
let SalarioConIncre=0;
let SalarioAcumulado=0;

for (var i = 1; i <=6; i++) {
    if(i==1)
    {
        SalarioAnual=12*SalarioInicial;
        SalarioConIncre=SalarioInicial;
        console.log(`Su salario mensual en el año ${i} es ${SalarioInicial} dolares`);
    }
    else
    {
        IncrementoAnual=0.1*SalarioConIncre;
        SalarioConIncre=SalarioInicial+IncrementoAnual;
        SalarioAnual=12*SalarioConIncre;
        console.log(`Su salario mensual en el año ${i} es ${SalarioConIncre} dolares incremento anual ${IncrementoAnual}`);
    }
    SalarioAcumulado=SalarioAcumulado+SalarioAnual;
 }

 console.log(`Su salario durante durante los 6 años es: ${SalarioAcumulado} dolares`);

