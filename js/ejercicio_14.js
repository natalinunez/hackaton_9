let ConVerde=0;
let ConBlanco=0;
let ConRojo=0;

let NumeroFocos=Number.parseInt(prompt('Ingresa el número de focos:'));
for (var i = 1; i <=NumeroFocos; i++) 
{
    let ColorFoco=prompt(`Ingresa color del foco ${i}`);

    switch (ColorFoco) 
    {
        case 'verde':
            ConVerde=ConVerde+1;
            break;
        case 'blanco':
            ConBlanco=ConBlanco+1;
            break;
        case 'rojo':
            ConRojo=ConRojo+1
            break;
    }
}
console.log(`Cantidad de focos verdes: ${ConVerde} Cantidad de focos blancos: ${ConBlanco} Cantidad de focos rojos:${ConRojo}`);
