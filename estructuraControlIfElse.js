// Ejercicio 1
let temperatura = 40;
if(temperatura >= 40) {
    console.log(`usted tiene fiebre, su temperatura es mayor a ${temperatura} grados`);
} else {
    console.log(`No se preocupe su temperatura se encuentra normal`)
}

// Ejercicio 2
let tipoCliente = "Normal";

if(tipoCliente == "normal") {
    console.log(`Va a ser atendido en el modulo 1, por ser cliente ${tipoCliente}`);
} else if (tipoCliente == "preferencial"){
    console.log("esta habillitado los modulos 2 y 3 para su atencion")
} else {
    console.log("usted no es cliente del banco, por favor dirijase al modulo 4");
}

// Ejercicio 3
let emailBaseDatos = "arle64@gmail.com";
let claveBaseDatos = "1234*";
let emailIngresado = "arle@gmail.com";
let claveIngresada = "1234*";
let nombreUsuario = "Juan";

if(emailBaseDatos == emailIngresado && claveBaseDatos == claveIngresada) {
    console.log(`${nombreUsuario} bienvenido!, seleccione opciones delsistema`);
} else {
    console.log(`Acceso denegado...`);
}

// Ejercicio 4
let derecha = true;
let izquierda = false;
let arriba = false;
let abajo = false;

if(derecha) {
    console.log("Robot moviendose hacia la derecha");
} else if (izquierda) {
    console.log("Robot moviendose hacia la izquierda");
} else if (arriba) {
    console.log("Robot moviendose hacia la arriba");
} else if (abajo) {
    console.log("Robot moviendose hacia la abajo");
} else {
    console.log("Atencion, Movimiento extraño");
}

// Ejercicio 5
let encendido = true;
let velocidad = 32;
if(encendido){
    console.log(`Su carro esta encendido`);
    if(velocidad == 0) {
        console.log(`Carro freno`);
    } else if (velocidad > 0 && velocidad <= 100){
        console.log(`carro en marcha...`)
    } else {
        console.log(`Evitese un accidente... Exceso de velocidad`)
    }
} else {
    console.log(`Encienda su vehiculo...`);
}

// Ejercicio 6
let dia = "Miercoles";
let clase = "Algoritmos";
if(dia == "Miercoles") {
    console.log(`La clase de hoy es ${clase}`);
} else {
    console.log(`Hoy no toca ${clase}`);
}
