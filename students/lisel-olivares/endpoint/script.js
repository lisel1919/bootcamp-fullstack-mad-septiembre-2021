/* 1- Crear un Endpoint (una URL con datos) de tipo GET con la página designer.mocky.io, con la siguiente respuesta (200 ok):

{
    name: 'Madrid',
    image: 'https://www.collegiate-ac.es/propeller/uploads/sites/3/2019/10/city-hero-madrid-1450x742.jpg'
  }
  
  Pintar la imagen de Madrid en el body
  */

// const madrid = {
//     method: 'GET',
// }

// fetch('https://run.mocky.io/v3/ffec2cf5-21de-4d37-b4cf-fdca8e214c36', madrid)
//     .then(result => result.json())
//     .then(d => {
//         console.log(d);
//         const imgDOM = d.image; // busco la url de la imagen y la declaro como constante(variable)
//         const foto = document.createElement('img'); //(creo la imagen)
//         foto.src = imgDOM;
//         document.body.appendChild(foto); // inyecto la foto en el body html
//     })






/* 2. Crear un endpoint de tipo PUT (con la página de beeceptor) con el siguinete pah (/primer-put) que no responda nada en el body y mandarle la siguiente información:

{
  status: 'Encantado con lo que aprendo'
}
*/

// const addInfo = { // creo una constante y le declaro el metodo PUT prque quiero crear algo nuevo
//     method: 'PUT',
//     body: JSON.stringify({demo: 'Encantada con lo que aprendo'}) // envio datos al servidor mediante JSON asociado a stringify, tiene que pasarse mediante un objeto
// }

// fetch('https://madrid.free.beeceptor.com/primer-put', addInfo) // url , constante
// .then(r => r.json())
// .then(d =>{
//     console.log(d)
// })



// 2.1 En un HTML tener un botón que cuando se haga click se envíe el PUT del ejercicio 2

// const enviar = document.getElementById('boton');

// boton.addEventListener('click', function(){
//     fetch('https://madrid.free.beeceptor.com/primer-put', enviar)
//     .then(r => console.log(r)) // cuando nosotros enviamos info al servidor solo se pone un then
// }
// )


// 1.- Probar los endpoints que tenemos montados de la mañana para que devuelvan códigos de error. Navegar en el Network de las devtools para localizar y analizar la información de la petición.



const addInfo = { // creo una constante y le declaro el metodo PUT prque quiero crear algo nuevo
    method: 'PUT',
    body: JSON.stringify({demo: 'Encantada con lo que aprendo'}) // envio datos al servidor mediante JSON asociado a stringify, tiene que pasarse mediante un objeto
}

fetch('https://madrid.free.beeceptor.com/primer-put', addInfo) // url , constante
.then(r => r.json())
.then(d =>{
    console.log(d)
})
 // este ejercicio es el mismo que el 2, pero en beeceptor he cambiado a error 404 para que salga como error






//2.- Crear un endpoint de tipo GET que devuelva la información de los primeros 150 pokemons con la misma estructura que trabajamos ayer.


//3.- Modificando solo la url a la que hacemos la petición para la pokedex por el nuevo endpoint del ejercicio 2, debemos visualizar los 150 pokemons tal como haciamos ayer. 
