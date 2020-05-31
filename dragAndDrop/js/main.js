

//DRAG & DROP

//FUNCIÓN QUE DEDUCE QUE EVENTO SE DESENCADENA

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    
}

//FUNCIÓN QUE NOS PERMITE SOLTAR UN OBJETO ENCIMA DEL ÁREA DE DROP

function allowDrop(ev) {
    ev.preventDefault();
}


//FUNCIÓN DROP QUE CONSISTE EN SOLTAR EL OBJETO

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}