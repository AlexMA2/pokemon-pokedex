
const pathAPI = "https://pokeapi.co/api/v2"

async function getAllPokemon() {
    const res = await fetch(`${pathAPI}/pokemon`)
    const result = await res.json()
    const pokemons = result.results

    return pokemons
}

async function getPokemonByName(name) {
    const res = await fetch(`${pathAPI}/pokemon/${name}`)   
    return res.json()
}

export {getAllPokemon, getPokemonByName}