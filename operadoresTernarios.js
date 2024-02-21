// Transcripcion ejercicios en clase 

// Ejercicio 1
let edad = 9;
    edad >= 18 ? console.log("Es mayor de edad..."): console.log("Es menor de edad-.");

// Ejercicio 2
let numero = -3;
    numero > 0 ? console.log("numero positivo") : console.log("numero negativo");

// Ejercicio 3
let ocupacionCancha = true;
let nombreCancha = "Bernabeu";
    let mensaje = ocupacionCancha ? `La cancha llamada ${nombreCancha} esta ocupada`: `La cancha llamada ${nombreCancha} esta disponible`;
        console.log(mensaje);

// Ejercicio 4
const email = "arleth64gmail.com";
const contraseña = "1234";

    email == "arleth64gmail.com" && contraseña == "1234" ? console.log(`señor usuario con correo ${email} Bienvenido al sistema`) : console.log(`El correo ${email}y la contraseña digitada es incorrecta`);

// Ejercicio 5
let colorSemaforo = "amarillo";
    colorSemaforo == "verde" ? console.log(`El semaforo esta en ${colorSemaforo} puede seguir`) :
    colorSemaforo == "rojo" ? console.log(`El semaforo esta en ${colorSemaforo} debe parar) : 
    colorSemaforo == "amarillo" ? console.log("Aliste motores") :
    console.log("muestra color ${colorSemaforo}, esta dañado);