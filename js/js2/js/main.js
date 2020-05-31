//CONDICIONALES, FUNCIONES Y BUCLES


//el IF... (condicional "si")  

var nombre = "Vicente";

if(nombre == "Ambrosio"){

    console.log("EFECTIVAMENTE, SE LLAMA...", nombre);
}


if(nombre == "Ambrosio"){

    console.log("EFECTIVAMENTE, SE LLAMA...", nombre);
}else{
    console.log("PUES RESULTA QUE TE LLAMAS...", nombre);
}

//EL IF ELSE DICHOSO....

var dni = "233354334Y";

if(dni == "234234234T") {
    console.log("Vaya, si es el primero");
} else if (dni == "233354334asdfasdf"){
    console.log("Este si es correcto");
} else {
    console.log("Ninguno de los dos");
}


//ANIDAR....

var edad = 18;

var nombre = "Kiko";

if(nombre == "Kiko"){
    if(edad >= 18){
        console.log("Kiko, bienvenido a la discoteca");
    }
}

//USO DEL AND &&

if((nombre == "Kiko") && (edad >= 18)){
    console.log("Kiko, bienvenido de nuevo ...");
}