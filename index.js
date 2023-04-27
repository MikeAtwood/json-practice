function fetchPokemon(pokemonId) {
    return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(res => res.json())
        .then(data => {
            const pokemon = {
                name: data.name,
                imageUrl: data.sprites.front_default
            }
            resolve(pokemon)
        })
        .catch(err => {
            reject(err)
        })
    })
}

