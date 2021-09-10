import { useState } from "react";
import { getAllPokemon, getPokemonByName } from "../../services/pokemon.js";
import CustomLayout from "../../components/CustomLayout";
import styles from "../../styles/Pokedex.module.css";
import CardPokemon from "../../components/CardPokemon";
import Search from "../../components/Search.jsx";
import Progress from "../../components/Progress/Progress.jsx";
import { useRouter } from "next/router";

const Pokedex = ({ pokemon }) => {
  
  const router = useRouter()
  const [otherSprites, setOtherSprites] = useState(pokemon.sprites.other)

  const transformPokemonWeight = (weight) => {
    return weight / 10 + " Kg";
  };

  const transformPokemonHeight = (height) => {
    return height / 10 + " m";
  };

  return (
    <CustomLayout className={styles.layout} title={`Pokedex | ${pokemon.name}`}>
      <Search placeholder="Busca un nuevo pokemon..." />       
        <CardPokemon
          img={otherSprites.dream_world.front_default ? otherSprites.dream_world.front_default : otherSprites["official-artwork"].front_default}
          name={pokemon.name}
          sprites={pokemon.sprites}
          abilities={pokemon.abilities}
          data={{
            height: transformPokemonHeight(pokemon.height),
            weight: transformPokemonWeight(pokemon.weight),
            types: [...pokemon.types],
          }}
        />      
    </CustomLayout>
  );
};

export async function getStaticPaths() {
  const pokemons = await getAllPokemon();
  
  const paths = pokemons.map((poke) => ({
    params: { id: poke.name },
  }));

  console.log(paths)

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
 
  const pokemon = await getPokemonByName(params.id);  
  console.log(pokemon)
  return {
    props: {
      pokemon,
    },
  };
}

export default Pokedex;
