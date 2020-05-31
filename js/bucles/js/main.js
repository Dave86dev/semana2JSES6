//MI PRIMER BUCLE WHILE

var precio = 50;

while (precio >=1){
    //mientras que precio sea mayor o igual que uno, va a ejecutarse lo que vaya dentro
    //de estas llaves

    //console.log("HOLA, SOY PRECIO Y MI VALOR ES:", precio);

    //finalmente, decrementamos la variable para hacer otra vuelta al bucle.
    --precio;
}

// var numero = prompt("Señor usuario, sería tan amable de darnos un maravilloso número?");
// var i = 1;
// var resultado;


// //entramos en el bucle while 
// while (i <= 10){

//     resultado = numero * i;
//     console.log(numero, " X ", i, " = ", resultado);

//     ++i;

// }


//MI PRIMER BUCLE DO WHILE

// var precio2 = 4;

// do{

//     console.log("El precio 2 es :", precio2);

//     precio2--;

// }while(precio2 > 5);

//MI PRIMER Y GENIAL BUCLE FOR

// var numero = prompt("DIME UN NÚMERO DEL 1 AL 10");
// var resultado;

// for(var contador = 1; contador <= numero; contador++){

//     resultado = numero * contador; //estamos haciendo la operación
//     console.log(numero, " X " ,contador, "es igual a ", resultado);

// }

//declarariamos la función anónima

// var cuadrado = function(numero){
//     return numero * numero;
// };

// //ahora usaremos la función para asignar valor a una variable


// var resultado = cuadrado(5);

// console.log(resultado);





//FUNCION CLASICA

function cuadrado(numero){
    var res = numero * numero;

    return res;
}

//EN ESTE CASO, cuadrado(6) tiene como valor, el valor de return que devuelve
var resultado = cuadrado(6);


console.log(resultado);