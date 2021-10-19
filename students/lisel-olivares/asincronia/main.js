//1. Crear una promesa que cuando se resuelva tras 5 segundos muestre un <p>Hello World</p> en el navegador.

const myPromise = new Promise((resolve) => { // creo la promesa
    setTimeout(() => {
        resolve('promesa resuelta')
    }, 5000 );    // tiempo de espera

});
myPromise.then((valor) => { // valor es 'promesa resuelta'
    const miTexto = document.createElement('p'); // creamos el elemento
    miTexto.textContent = 'Hello World' + valor // creo el texto del elemento
    document.body.appendChild(miTexto); // muestro el elemento en el body de html

});








//2. Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10. Entre elemento y elemento debe transcurrir 0.5 segundos.

let count = 0 // para que el contador empieze a contar desde cero

const miBoton = document.getElementById('boton'); // traer el boton
miBoton.addEventListener('click', e =>{ // añadirle el evento de clickar para ejecutar l accion
    const intervalo= // para dar un nombre a toda la funcion
    setInterval(() =>{
        const pCont = document.createElement('p'); // creamos un documento p
        pCont.textContent = count; // le añadimos el texto de 'count' para que empiece a dumar desde ahi
        document.body.appendChild(pCont) // paara pintarlo
        count++ // va contando de uno en uno
        if (count === 11){ // condicional para que cuando llegue a 10 pare
            clearInterval(intervalo); // para que pare
        }
    }, 500); // tiempo de intervalo equivalente a 5sg
})








//3. Refactorizar el ejercicio anterior para que al pulsar el botón aparezcan los números impares de 1 en 1 cada 0,5 segundos y posteriormente (después de + 1,5 segundos) aparezcan los pares cada 5 segundos.


let contador = 0

const miBoton2 = document.getElementById('boton2'); 
miBoton2.addEventListener('click', e =>{ 
    const sucesion = // para dar un nombre a toda la funcion
    setInterval(() =>{
        const pCont2 = document.createElement('p');
        pCont2.textContent = contador;
        document.body.appendChild(pCont2) 
        contador + 2
        if (count === 11){ // condicional para que cuando llegue a 10 pare
            clearInterval(intervalo); // para que pare
        }
    }, 500); // tiempo de intervalo equivalente a 5sg
})










//4. Crear una función que se ejecute cada 1 segundo y pinte por pantalla un reloj con el formato hh:mm:ss (si alguna unidad es menor de 10 podemos mostrarla en el formato h:m:s). ***Investigar métodos get de la clase Date*** OPCIONAL: gestionar que el formato sea hh:mm:ss en todo momento (03:05:03)













//5. Crear un input y un botón en el navegador. El input recibirá un valor numérico (habrá que "parsearlo") y al pulsar el botón comenzará a correr el tiempo en segundos. Cuando se alcance el valor introducido en el input se parará el cronómetro y se mostrará el texto "Finish" en el navegador.