import React from "react";
import {getAllPokemon, getPokemonByName} from '../../services/pokemon.js'
import CustomLayout from '../../components/CustomLayout'
import styles from '../../styles/Pokedex.module.css'
import CardPokemon from '../../components/CardPokemon'

const Pokedex = ({ pokemon }) => {

  const transformPokemonWeight = (weight) => {
    return (weight / 10 ) + " Kg"
  }

  const transformPokemonHeight = (height) => {
    return (height / 10 ) + " m"
  }

  return (
    <CustomLayout className={styles.layout}  title={`Pokedex | ${pokemon.name}`}>      
      <CardPokemon 
        img={pokemon.sprites.other.dream_world.front_default} 
        name={pokemon.name} 
        sprites={pokemon.sprites}
        abilities={pokemon.abilities}
        data={{
          height:  transformPokemonHeight(pokemon.height), 
          weight : transformPokemonWeight(pokemon.weight), 
          types: [...pokemon.types]
        }}
      />
    </CustomLayout>
  );
};

export async function getStaticPaths(){
    const pokemons = await getAllPokemon()
    // Get the paths we want to pre-render based on posts
    const paths = pokemons.map((poke) => ({
      params: { id: poke.name },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {  
  const pokemon = await getPokemonByName(params.id);   
  return {
    props: {
      pokemon,
    },
  };
}

export default Pokedex ;
