
// Pido que introduzcan 5 numeros (0,1,2,3,4)
let numeros = [];
let salir = false;
for(let i=0;i<5; i++) {
  let numero = prompt(`Introduce el número ${i+1} o salir`);
 
       
 
  // Valido que ingresen numeros
  while(isNaN(numero) || numero === "") {
    numero = prompt(`El valor marcado no es un numero, introduzca uno porfavor:`);
  } 
  numeros.push(Number(numero));
}

// Ordeno los números de mayor a menor

numeros.sort( function( a , b){
    if(a < b) return +1;
    if(a > b) return -1;
    return 0;
})
numeros.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

document.write("Los numeros en orden son " + numeros);











      