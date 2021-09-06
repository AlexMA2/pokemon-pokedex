import React from "react";
import Image from "next/image";
import styles from "../styles/CardPokemon.module.css";
import getPokemonColor from "../utils/getPokemonColor.js";

const CardPokemon = ({ img, name, sprites, abilities, data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={img}
          alt={`Una imagen de un pokemon llamado ${name} `}
          height={200}
          width={125}
        />
        <h2> {name} </h2>
      </div>
      <div className={styles.sprites}>
        <div className={styles.btns}>
          <button className={styles.btnMale}> Male </button>
          <button className={styles.btnFemale}> Female </button>
        </div>
        <div className={styles.gridSprites}>
          <div>
            <Image
              src={sprites.back_default}
              alt={`${name}  de espalda`}
              height={96}
              width={96}
            />
            <p>Normal de espalda</p>
          </div>
          <div>
            <Image
              src={sprites.front_default}
              alt={`${name}  de frente`}
              height={96}
              width={96}
            />
            <p>Normal de frente</p>
          </div>
          <div>
            <Image
              src={sprites.back_shiny}
              alt={`${name} Shiny de espalda`}
              height={96}
              width={96}
            />
            <p>Shiny de espalda</p>
          </div>
          <div>
            <Image
              src={sprites.front_shiny}
              alt={`${name} Shiny de frente`}
              height={96}
              width={96}
            />
            <p>Shiny de frente</p>
          </div>
        </div>
      </div>
      
      <div className={styles.data} style={{backgroundColor: getPokemonColor(data.types[0].type.name)}}>
        <div className={styles.keys}>
          <div className={styles.key}> Altura: </div>
          <div className={styles.key}> Peso: </div>
          <div className={styles.key}>Tipos: </div>
          {abilities.map((ability, index) => (
            <div key={index} className={styles.key}>
              {ability.is_hidden ? "Hab. Oculta: " : "Habilidad: "}
            </div>
          ))}
        </div>
        <div className={styles.values}>
          <div className={styles.value}>{data.height}</div>
          <div className={styles.value}>{data.weight}</div>
          <div className={styles.value}>
            {data.types.map((type, index) => (
              <span key={index}> {type.type.name}</span>
            ))}
          </div>    
          {abilities.map((ability, index) => (
            <div key={index} className={styles.key}>
              {ability.ability.name}
            </div>
          ))}      
        </div>
            
      </div>
    </div>
  );
};

export default CardPokemon;
