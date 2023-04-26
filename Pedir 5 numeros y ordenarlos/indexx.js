
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













      