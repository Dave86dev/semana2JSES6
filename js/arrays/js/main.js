
//QUÉ ES UN ARRAY...MI PRIMER EJEMPLO DE ARRAY.

var array = [1, 55, 4, 234, 65, 87];

//el índice se mediría del número 0 al 5. porqué? porque se empieza a contabilizar en la posición 0.

//bucle for 

// for(i=0; i< array.length; i++){
//     //console.log("La posición es :",i," y su valor es: ", array[i]);
// }



// var nombres = ["Adrian", "Alejandro", "Daniel", "Hans", "Jessica", "Jesús", "Jose Miguel", "Juanma", "Kiko","Christian","Oscar"];


// var nombreUsuario = prompt("Dime tu nombre");


// for(i=0; i<nombres.length; i++){
//     //esto itera 11 veces dada la longitud del array nombres
    
//     if(nombreUsuario == nombres[i]){
//         console.log("Hola ", nombreUsuario," bienvenido a clase de nuevo.");
//         break;
//     }

//     if(i == nombres.length - 1){
//         console.log("Tu nombre no se encuentra en la lista.");
//     }
    

// }

// var numeros = [1,2,3,4,5,6,7,8,9,10];

// for(i=0; i<numeros.length; i++){
//     console.log("La posición es : ", i, " y el valor es: ", numeros[i]);
// }

// var newArray = [1,2,3,4];

// var longitudNewArray = newArray.push(5);

// console.log("La nueva longitud del array es : ",longitudNewArray);

// console.log(newArray);

// var arrayElectrodomesticosA = ["Nevera","TV","Microondas"];

// var arrayElectrodomesticosB = ["Megadrive","BluRay"];

// var arrayConcatenado = arrayElectrodomesticosA.concat(arrayElectrodomesticosB);

// console.log(arrayConcatenado);

var fullName = ["Jose","Miguel","Bayarri"];

// console.log(fullName.join('/'));

var quitamos = fullName.shift();

console.log(quitamos);

console.log(fullName);