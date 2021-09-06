function getPokemonColor(type) {
    const colors = {
        steel: "#CDCED4",
        water: "#78B7FD",
        bug: "#EEEFBF",
        dragon: "#E3DBFF",
        electric: "#FBF0C4",
        ghost: "#999BC6",
        fire: "#FFCBB9",
        fairy: "#FFEFFF",
        ice: "#DBFCFF",
        fighting: "#DC9B91",
        normal: "#EEECE8",
        grass: "#DEFBD3",
        psychic: "#FACFDB",
        rock: "#F0EBD6",
        dark: "#D8CFCC",
        ground: "#FDECD4",
        poison: "#EACDE5",
        flying: "#DDEBFF",
    }

    return colors[type] || "#fff"

}

export default getPokemonColor

