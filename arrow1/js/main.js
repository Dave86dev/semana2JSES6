
//ARROW FUNCTIONS...

/*EJEMPLO DE FUNCIÓN CLÁSICA EN ECMASCRIPT5*/

function sumaES5 (a,b){
    return a + b;
}


//EJEMPLO DE FUNCIÓN EN ECMASCRIPT6


const sumaES6 = (a,b) => {
    return a + b;
}

//FUNCIÓN ECMASCRIPT6 INLINE (EN UNA LÍNEA)

const sumaES6Inline = (a,b) => a + b;

//FUNCTION ECMASCRIPT6 INLINE CON UN ÚNICO PARÁMETRO

const sumaES6InlineUnicoParametro = a => a * a;

//FUNCTION ECMASCRIPT6 INLINE RETORNANDO UN OBJETO

const es6RetornandoObjeto = nombre => ({Pokemon: nombre});


//USANDO LAS ARROW FUNCTIONS

let frutaSingular = ['melon','pera','platano','fresa'];

let plurales = frutaSingular.map(fruta => fruta + 's');

console.log(plurales);