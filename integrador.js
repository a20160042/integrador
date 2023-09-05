alert("Bienvenidos al Longhorn, esta es su cuenta");
var presupuesto=parseInt(prompt("Cuánto dinero trajo al resturante"));
var entrada=parseInt(prompt("Ingrese el monto de su entrada "));
var segundo=parseInt(prompt("Ingrese el monto de su segundo "));
var postre=parseInt(prompt("Ingrese el monto de su postre "));
var total=entrada + segundo + postre;
var igv=(total*18/100) + total;
console.log("La entrada cuesta ",entrada)
console.log("El segundo cuesta ",segundo)
console.log("El postre cuesta ",postre)
console.log("El costo total es: ",total)
console.log("El costo total con igv es: ",igv)
console.log("Su vuelto es de ", (presupuesto-igv))
console.log("Muchas gracias por visitar el Longhorn, vuelva pronto.")