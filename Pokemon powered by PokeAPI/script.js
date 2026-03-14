function queryPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            createPokemonCard(data.name, data.id, data.sprites.front_default, data.types[0].type.name);
        })
        .catch(error => console.error("Erro ao buscar:", error));
}

function createPokemonCard(name, pid, spr, types) {
    var pokeList = window.document.querySelector(`div.pokemonContainer`)
    name = name.charAt(0).toUpperCase() + name.slice(1)
    pokeList.innerHTML += 
    `<article class="pokemonCard">
        <img src="${spr}" alt="${name}" class="portrait">
        <h2 class="pokemonName">${name}</h2>
        <p class="pokemonType">${types}</p>
    </article>`

}

function insertPokemon() {
    var insertPoke = window.document.querySelector("input#insertPoke").value
    if (insertPoke == "All" || insertPoke  == "all") {
        for(var i=1025; i > 0; i--) {
            queryPokemon(i)
        }
    }
    else {
    queryPokemon(insertPoke)
    }
}