
//PRIMERA LINEA DE EJECUCIÓN....

var nota = prompt("Hola usuario, dime que nota tienes");

//una vez hemos clickado en aceptar en el prompt...el flujo sigue........ 

console.log(nota);



//una vez tenemos la nota y lo hemos comprobado... entramos en el condicional SWITCH

switch (nota) {
    case '0':
      console.log('INSUFICIENTE');
      break;
    case '1':
      console.log('INSUFICIENTE');
      break;
    case '2':
        console.log('INSUFICIENTE');
    break;
    case '3':
        console.log('INSUFICIENTE');
    break;
    case '4':
        console.log('INSUFICIENTE');
    break;
    case '5':
        console.log('SUFICIENTE');
    break;
    case '6':
        console.log('SUFICIENTE');
    break;
    case '7':
        console.log('NOTABLE');
    break;
    case '8':
        console.log('NOTABLE');
    break;
    case '9':
        console.log('SOBRESALIENTE');
    break;
    case '10':
        console.log('SOBRESALIENTE');
    break;
    
    default:
      console.log('Lo lamentamos, por el momento no disponemos de SU NOTA');
  }