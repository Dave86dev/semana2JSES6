
function creaNodo(){
    //aquí empezamos a crear html cada vez que el botón se pulse y por lo tanto
    //ejecutamos esta función

    let texto = document.createTextNode("Hola estamos en clase y la vida es maravillosa.");
    let h1 = document.createElement("h1");
    h1.appendChild(texto);

    document.getElementById("contenedor").appendChild(h1);

}

