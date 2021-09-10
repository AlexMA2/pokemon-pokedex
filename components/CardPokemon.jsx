import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/CardPokemon.module.css";
import getPokemonColor from "../utils/getPokemonColor.js";
import JSONTable from "./JSONTable";

const CardPokemon = ({ img, name, sprites, abilities, data }) => {
  const [gender, setgender] = useState(true);
  const [position, setPosition] = useState(-110);
  const [msgDiference, setmsgDiference] = useState("");

  const [dataPkm, setDataPkm] = useState({});

  const [spritesPkm, setSpritesPkm] = useState([
    sprites.back_default,
    sprites.back_shiny,
    sprites.front_default,
    sprites.front_shiny,
  ]);

  const refMale = useRef(null);
  const refFemale = useRef(null);

  useEffect(() => {
    setSpritesPkm([
      sprites.back_default,
      sprites.back_shiny,
      sprites.front_default,
      sprites.front_shiny,
    ]);

    if (
      !sprites.back_female ||
      !sprites.back_shiny_female ||
      !sprites.front_female ||
      !sprites.front_shiny_female
    ) {
      setmsgDiference("No hay diferencia notable entre ambos géneros");
    }
      

    const types = data.types.map((type) => type.type.name);
    const allAbilities = abilities.map((ability) => ability.ability.name);

    const hiddenAbility = allAbilities.pop();
    const normalAbilities = allAbilities.length > 0 ? allAbilities : " - ";

    const json = {
      altura: data.height,
      peso: data.weight,
      tipos: types,
      habilidades: normalAbilities,
      "Hab. Oculta": hiddenAbility,
    };

    setDataPkm(json);
  }, [sprites, abilities, data]);

  const toggleGender = () => {   
    setgender(!gender);    
    changeSpritesGender();
    setPosition(gender ? 110 : -110);
  };

  const changeSpritesGender = () => {
    
    if (!gender) {
      setSpritesPkm([
        sprites.back_default,
        sprites.back_shiny,
        sprites.front_default,
        sprites.front_shiny,
      ]);
    } else {
      if (msgDiference.length === 0) {
        setSpritesPkm([
          sprites.back_female,
          sprites.back_shiny_female,
          sprites.front_female,
          sprites.front_shiny_female,
        ]);
      } 
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={img}
          alt={`Una imagen de un pokemon llamado ${name} `}
          height={354}
          width={362}
        />
        <h2> {name} </h2>
      </div>
      <div className={styles.sprites}>
        <div className={styles.btns}>
          <button
            ref={refMale}
            className={styles.btnMale}
            disabled={gender}
            onClick={toggleGender}
          >
            {" "}
            Male{" "}
          </button>
          <button
            ref={refFemale}
            className={styles.btnFemale}
            disabled={!gender}
            onClick={toggleGender}
          >
            {" "}
            Female{" "}
          </button>
          <div
            className={styles.indicator}
            style={{
              backgroundColor: gender ? "#007AAE" : "#AE00A4",
              left: position + "px",
            }}
          ></div>
        </div>
        <div className={styles.gridSprites}>
          <div>
            <Image
              src={spritesPkm[0]}
              alt={`${name}  de espalda`}
              height={96}
              width={96}
            />
            <p>Normal de espalda</p>
          </div>
          <div>
            <Image
              src={spritesPkm[2]}
              alt={`${name}  de frente`}
              height={96}
              width={96}
            />
            <p>Normal de frente</p>
          </div>
          <div>
            <Image
              src={spritesPkm[1]}
              alt={`${name} Shiny de espalda`}
              height={96}
              width={96}
            />
            <p>Shiny de espalda</p>
          </div>
          <div>
            <Image
              src={spritesPkm[3]}
              alt={`${name} Shiny de frente`}
              height={96}
              width={96}
            />
            <p>Shiny de frente</p>
          </div>
        </div>
        <h4 style={{ height: "28px" }}> {msgDiference}</h4>
      </div>

      <JSONTable
        json={dataPkm}
        backgroundColor={getPokemonColor(data.types[0].type.name)}
      />
    </div>
  );
};

export default CardPokemon;
