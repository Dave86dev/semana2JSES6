
//la funcion se declara pero no se ejecuta, se queda aquí para cuando la necesitemos.
function valorUpdate(e){
    let escrito = e.target.value;

    if(escrito === 'David'){
        document.getElementById("parrafo").innerHTML = "Has escrito tu nombre";
    }else{
        document.getElementById("parrafo").innerHTML = "";
    }
}

//esta es la primera línea en ejecución.
let input1 = document.addEventListener('input', valorUpdate);
