//Ejercicio 15
//año de nacimiento para consultar
let EdadPersona=Number.parseInt(prompt('Ingresa la edad de la persona:'));
let anioElecciones=Number.parseInt(prompt('Ingresa año de la próximas elecciones:'));
let fecha=new Date();
let AnioActual=fecha.getFullYear();
let AnioNacimiento=AnioActual-EdadPersona;
let EdadElecciones=anioElecciones-AnioNacimiento;

if (EdadElecciones>=18)
    {
        console.log(`Usted puede emitir su voto para las elecciones ${anioElecciones}`);
    }
else
    {
        console.log(`Usted NO puede emitir su voto para las elecciones ${anioElecciones}`);
    }

