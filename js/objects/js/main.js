
//OBJETOS EN JAVASCRIPT

//Creamos la estructura de objetos

var peliculaCliente = {
    nombre: "",
    edad: 0,
};


var arrayPelis = [
    pelicula1 = {
        titulo: "Soy Leyenda",
        edad: 13,
    },
    pelicula2 = {
        titulo: "Rey Leon",
        edad: 3,
    },
    pelicula3 = {
        titulo: "La mano del demonio",
        edad: 18,
    },
    pelicula4 = {
        titulo: "A todo gas",
        edad: 8,
    }
]

//Le pedimos al usuario el nombre de la película que quiere ver y la edad que tiene.

var tituloPeli = prompt("Que película deseas ver?");

var edadCliente = Number(prompt("Que edad tienes?"));


//Depositar los valores de película y edad en el objeto cliente

peliculaCliente.nombre = tituloPeli;

peliculaCliente.edad = edadCliente;

//Comprobar que tenemos la edad suficiente para ver la película determinada.

for(i=0; i<arrayPelis.length; i++){
    //este FOR recorre el array donde hemos depositado los objetos (que son las películas)

    if((peliculaCliente.nombre == arrayPelis[i].titulo) && peliculaCliente.edad >= arrayPelis[i].edad){
        //ya hemos localizado la película que quería el cliente y comprobado si la edad es suficiente
        console.log("ENHORABUENA, PUEDES VER LA PELÍCULA");
        break;
    }else{
        console.log("LO SENTIMOS, NO TIENES LA SUFICIENTE EDAD PARA ENTRAR");
        break;
    }
}