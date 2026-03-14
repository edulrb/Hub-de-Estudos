var pokeList = window.document.querySelector(`div.pokemonContainer`)
var blackList = []
var logChannel = window.document.querySelector(`input#logChannel`)
var textList = ""
function queryPokemon(id) {
    if(id == "all" || id == "All" || id == "ALL") {
        var urls = []
        for(i=1025; i > 0; i--) {
            urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        async function allPokes() {
            try {
                const promessas = urls.map(url =>
                    fetch(url).then(response => response.json())

                );
            
                const resultados = await Promise.all(promessas);
                for(i=1024; i >= 0; i--) {
                    if(resultados[i].types.length == 2) {
                        var type1 = resultados[i].types[0].type.name
                        var type2 = resultados[i].types[1].type.name 
                    } else { 
                        var type1 = resultados[i].types[0].type.name 
                        var type2 = 'none'
                    }
                    var htmlList = createPokemonCard(true, resultados[i].name, resultados[i].id, resultados[i].sprites.front_default, type1, type2, resultados[i].types.length);
                }
                pokeList.innerHTML = htmlList 
                logChannel.value = "Todos os pokémons foram adicionados!"

                console.log(resultados);
            } catch (erro) {
                console.error("Erro ao buscar pokémons: ", erro);
            }
        }
        allPokes()
    }
    else {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                upperName = data.name.charAt(0).toUpperCase() + data.name.slice(1)
                if(blackList.includes(data.id)) {
                   logChannel.value = `O pokémon ${upperName} já foi adicionado!`
                   logChannel.style.color = `red`
                } else {
                    if(data.types.length == 2) {
                        type1 = data.types[0].type.name
                        type2 = data.types[1].type.name 
                    } else { 
                        type1 = data.types[0].type.name 
                        type2 = 'none'
                    }
                    createPokemonCard(false, data.name, data.id, data.sprites.front_default, type1, type2, data.types.length);
                    logChannel.value = `O pokémon ${upperName} foi adicionado!`
                    logChannel.style.color = `green`
                }
            })
            .catch(error => console.error("Erro ao buscar:", error));
    }
}

function createPokemonCard(isList, name, pid, spr, type1, type2, quantTypes) {
    blackList.push(pid)
    name = name.charAt(0).toUpperCase() + name.slice(1)
    if(isList == false) {
        if(quantTypes > 1) {
        pokeList.innerHTML += 
        `<article id="pNum${pid}" class="pokemonCard">
            <div class="removeBtn"></div>
            <img src="${spr}" alt="${name}" class="portrait">
            <h2 class="pokemonName">${name}</h2>
            <p class= "pokemonID">#${pid}</p>
            <p class="pokemonType">${type1}/${type2}</p>
        </article>`
        } else {
        pokeList.innerHTML += 
        `<article id="pNum${pid}" class="pokemonCard">
            <div class="removeBtn"></div>
            <img src="${spr}" alt="${name}" class="portrait">
            <h2 class="pokemonName">${name}</h2>
            <p class= "pokemonID">#${pid}</p>
            <p class="pokemonType">${type1}</p>
        </article>`       
        }
    } else {
        if(quantTypes > 1) {
          textList += 
            `<article id="pNum${pid}" class="pokemonCard">
                <div class="removeBtn"></div>
                <img src="${spr}" alt="${name}" class="portrait">
                <h2 class="pokemonName">${name}</h2>
                <p class= "pokemonID">#${pid}</p>
                <p class="pokemonType">${type1}/${type2}</p>
            </article>`  
        } else {
          textList += 
            `<article id="pNum${pid}" class="pokemonCard">
                <div class="removeBtn"></div>
                <img src="${spr}" alt="${name}" class="portrait">
                <h2 class="pokemonName">${name}</h2>
                <p class= "pokemonID">#${pid}</p>
                <p class="pokemonType">${type1}</p>
            </article>`   
        }
        return textList   
    }

}

function insertPokemon() {
    var insertPoke = window.document.querySelector("input#insertPoke").value
    queryPokemon(insertPoke)
}

function removePokemonCard(pid) {
    const card = document.querySelector(`article#pNum${pid}`)
    if (card) {
        card.remove();
    }
}