
// //Lo primero que voy a ejecutar es esto:
// document.write("<p>La tabla del 5</p>");

// //Creamos la cabecera de la tabla que siempre será una cabecera solo
// document.write(`<table>`);
// //Usamos un bucle FOR para dinámicamente pintar el número de filas, que puede variar
// for(i=1; i<=10; i++){
//     document.write(`<tr><td>5 X ${i} = ${i * 5}</td></tr>`);
// }
// //Finalmente cerramos la tabla que siempre tendrá sólo un cierre
// document.write(`</table>`);

var parrafos = document.getElementsByTagName("p");

var parrafoOk = document.getElementsByClassName("parrafoBien");

console.log(parrafoOk);