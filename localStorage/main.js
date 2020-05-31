
//localStorage

/*¿Como guardamos en localStorage?*/


//SET ITEM PARA GUARDAR
localStorage.setItem('LinkedIn','@JoseMiguel');

//GET ITEM PARA RECOGER Y LEER

let person = localStorage.getItem('LinkedIn');

console.log("Hola, soy ",person, " y la variable es a su vez un dato de tipo : ", typeof(person));

//GUARDAMOS UN JSON CON STRINGIFY

let buddy = {
    nombre: 'alejandro',
    apellidos: 'gonzalez',
}

localStorage.setItem('Colega', JSON.stringify(buddy));

//COMO LO LEEMOS? 

let colega = JSON.parse(localStorage.getItem('Colega'));

console.log("Mi colega se llama : ", colega);


//COMO LO ELIMINAMOS ? ? 

localStorage.removeItem('Colega');

console.log("LA SEGUNDA VEZ QUE LO PREGUNTO :",localStorage.getItem('Colega'));

//SI QUIERO ELIMINAR LA LOCALSTORAGE DEL TODO...

localStorage.clear();

console.log("QUEDA ALGO POR AQUÍ??? :",localStorage.getItem('LinkedIn'));
