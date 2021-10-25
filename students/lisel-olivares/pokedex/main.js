//Ejercicio 1: Recuperar la información de pikachu del API de pokemon y mostrar en la web su imagen frontal y su nombre

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
.then(result => result.json())
.then(data => {
    const pokemon = data.results[24].url;
    console.log(data.results);
    fetch(pokemon)
    .then(r => r.json())
    .then(d => {
        const contenedor = document.createElement('div');
        contenedor.classList.add('container');

        const pika = d.sprites.front_shiny;
        const foto = document.createElement('img');
        foto.src=pika;
        contenedor.appendChild(foto);

        const nombre = d.name;
        const pokeNom = document.createElement('p');
        pokeNom.textContent=nombre;
        contenedor.appendChild(pokeNom);
        console.log(d);

        const tipo = d.types[0].type.name;
        const pokeTipo = document.createElement('p');
        pokeTipo.textContent=tipo;
        contenedor.appendChild(pokeTipo);

        document.body.appendChild(contenedor);
    })
    });


/* Ejercicio 2: Construcción de la aplicación de POKEDEX:
Vamos a construir una aplicación para mostrar una pokedex (ver imagen de ejemplo de diseño). La pokedex:
 - Mostrará el listado con los primeros 150 pokemons en orden. Para cada pokemon se mostrará:
       * Imagen frontal del pokemon
       * Nombre del pokemon
       * Tipo del pokemon
 - Se añadirá un buscador que cuando el usuario vaya escribiendo el nombre, en la lista solo aparecerán los que contengan el texto buscado en su nombre.
 - (NO ES TRIVIAL) Al hacer click en un pokemon desaparecerá el listado y se mostrará información detallada de ese pokemon (Elegir algunos datos como el ataque)
 Para obtener los datos utilizaremos el API de https://pokeapi.co/. En concreto necesitaremos obtener datos de las siguientes URL’s:
 - https://pokeapi.co/api/v2/pokemon?limit=150 => devuelve el listado de los 150 primeros pokemon con su nombre y la URL del API que contiene su información.
 - Con la URL de cada pokemon obtendremos la información detallada de ese pokemon. Tendremos que utilizar esa URL para obtener esos datos para la pokedex*/
