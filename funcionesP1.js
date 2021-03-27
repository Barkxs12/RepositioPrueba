//Declaracion de una función
function multiplica( primerOperando, segundoOperando ){
    var resultado = primerOperando * segundoOperando;
    console.log( "El resultado es " + resultado);
}
//multiplica(25, 2 );

function multiplicaN3(){
    var resultado = 12 * 12;
    console.log("El resultado es: " + (resultado) );
}
//multiplicaN3();

//Funcion como epresion
var resultado = function multiplicaN2 (primerOperando){
    //2 * 25 --> 50
    //resultado =50;
    return  2 * primerOperando;
}
console.log( resultado( 25 ));

//Funcion Flecha
//Fuuncion que saluda a una Persona
const saludaPersona = ( nombre ) => console.log( "Feliz cumpleaños " + nombre)
saludaPersona( "Castillo" )

const suma = (numero) => console.log( numero * 2);
suma(12);



function determinadoNumero( numero ){
    if((numero%2)== 1){
        console.log("El numero es impar ");
    }
    else if(numero % 2 == 0){
        console.log("El numero es par ")
    }
}
determinadoNumero(23);

function determinaTexto (texto){
    if( texto == texto.toUpperCase()){
        console.log("El texto esta en mayuscula");
    }
    else if( texto == texto.toLowerCase() ){
        console.log ("El texto esta en minuscula");
    }
}
determinaTexto("hola");