let originalPokemonList = []; // array global

function generatePokemonTypeListDOM(){
    // dado una lista de tipos generar su HTML y devolverlo
    const pokemonTypeListDOM = document.createElement('ul');
    pokemonTypeListDOM.classList.add('pokemon_list-type');

    type.forEach(t => {
        const pokemonTypeListItemDOM = document.createElement('li');
        pokemonTypeListItemDOM.textContent = t.type.name;
        pokemonTypeListDOM.appendChild(pokemonTypeListItemDOM);
    });

    return pokemonTypeListDOM;
}


function drawPokemon(){
    const pokemonContainerDOM = document.createElement('div');
    pokemonContainerDOM.classList.add('pokemon-card_container');

    const pokemonIMGDOM = document.createElement('img');
    pokemonIMGDOM.src = '';

    const pokemonNameDOM = document.createElement('h2');
    pokemonNameDOM.textContent = pokemon.name;

    pokemonContainerDOM.appendChild(pokemonIMGDOM);
    pokemonContainerDOM.appendChild(pokemonNameDOM);
    pokemonContainerDOM.appendChild(generatePokemonTypeListDOM(pokemon.types));

    document.querySelector('.pokedex_container').appendChild(pokemonContainerDOM);
}

function undrawPokemonList(){
    document.querySelector('.pokedex_container').innerHTML = '';
}

/* 1. esta funcion llama al servidor recuperando los pokemon
   2. devuelve la lista de pokemon
   */
async function retrievePokemonList(limit=150, offset=0){ // establezco valores por defecto a los parametros
    const r = await fetch('url del servidor con limit=${limit} y offset=${offset}')
    const pokemonList = await r.json();
    return pokemonList.results; // esto es lo que se envia en el fullfill de la promesa
} // esta funcion devuelve una promesa que cuando esta fullfilled devuelve un array de objetos de tipo string ({name, url})

// retrievePokemonList().then(pokemonList =>{
//     // podria hacer cosas con pokemon list
//     console.log(pokemonList);
// }) esto era para comprobar que funciona

async function retrievePokemon(url){
    // se encarga de devolver la info del pokemon dada la url del pokemon
    const r = await fetch(url);
    const pokemonInfo = await r.json();
    return pokemonInfo;
} // esta funcion devuelve una promesa que cuando esta fullfilled devuelve el objeto con el 

async function drawPokemonListFromAPI(){
    const pokemonList = await retrievePokemonList();
    // aqui tendria la lista de pokemon cuando termina la asincronia de retrievePokemonList
    pokemonList.forEach(async p => {
        // busco la info del pokemon que estoy actualmente iterando
        const pokemon = await retrievePokemon(p.url);
        drawPokemon(pokemon); // pinto mi pokemon cuando se resuelva la asincronia
        originalPokemonList.push(pokemon); // añadir el pokemon a la lista global
        // originalPokemonList.sort((a, b)=> a.id-b.id); // ordeno el array
        });
    }

drawPokemonListFromAPI();

// Asignar evento keyUp al search input para poder filtar lo que el usuario escriba
const searchInputDOM = document.querySelector('.search_input');
searchInputDOM.addEventListener('keyUp', e=> {
    //funcion que se ejecut cada vez que escribo en el input
    const filteredPokemon = originalPokemonList.filter(p = p.name.includes(e.target.value)); // filtro por los pokemon que tengan en su nombre el valor introducido en el input
    undrawPokemonList();
    filteredPokemon.forEach(p => drawPokemon(p));
})