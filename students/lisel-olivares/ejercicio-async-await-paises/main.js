// 1 Pintar el nombre más corto del pais del array

async function printSmallerCountry(){

    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    d.countries.sort((a,b) => b.name_en.length - a.name_en.length);
    const p = document.createElement('p');
    p.textContent = d.countries.pop().name_en;
    document.body.appendChild(p);
  }

  printSmallerCountry(); // llamo a la funcion





// 2 Pintar en el HTML los paises que tengan 4 letras en su nombre en castellano

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json())
.then(d => {
  let newArray = d.countries.filter((a) => a.name_en.length <= 4); // creo un array nuevo
  newArray.forEach(e => { // un forEach para que ejecute cada elemento del array
    const fourWords = document.createElement('p'); // creo una variable para poder visualizarlo más tarde
    fourWords.textContent = e.name_en; // inyecto el texto en la variable
    document.body.appendChild(fourWords); // inyecto el texto en html
  });  
});





//3.- Pintar en el HTML un listado de todos los paises estructurado como un "listín telefónico" en que veamos pais (en español), codigo de pais, prefijo

fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
.then(result => result.json())
.then(l => {
  l.countries.forEach(e => { // l.countries es un array, el forEach para que ejecute cada elemento del array
    const listado = document.createElement('p'); // creo elemento p
    listado.textContent = e.dial_code + e.name_es + e.code; // inyecto el texto en la variable para que muestre los arrays de los nombres en español, el codigo y el prefijo
    document.body.appendChild(listado); // inyecto el texto en html
  });  
});




//4.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.

document.getElementById('boton');
addEventListener('click')




//5.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español) debe aparecer debajo la información completa de ese país.

let countries = []; // variable para guardar los paises
 fetch ('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
 .then(r=json())
 .then(d => countries = d.countries);

// escucho el submit del formulario para actualizar el resultado
 document.querySelector('form').addEventListener('submit', e => {
   e.preventDefault();
   const userSearch = e.target.search.value; // guardo el valor del input
   const country = countries.find(c => c.name_es.toLowerCase === userSearch);
   const pDOM = document.querySelector('p'); // creo variable para pinarlo
   pDOM.textContent = `Nombre (EN): ${country.name_en}, Nombre(ES): ${country.name_es}, Prefijo: ${country.dial_code}`
 })








//6.- Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'







//7.- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.

countries.filter (c=>parseInt(c.dial_code) > 20 && parseInt(c.dial_code) >600).length // esto se veria en la consola d elas devtools