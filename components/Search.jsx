import { useState } from "react";
import styles from "../styles/Search.module.css";
import { getPokemonByName } from "../services/pokemon";
import Link from "next/link";
import { useRouter } from 'next/router'

const Search = ({ placeholder }) => {
  const router = useRouter()
  const path = router.asPath.substring(1, 8) === 'pokedex' ? "" : "pokedex/" 
 
  const [wordToSearch, setwordToSearch] = useState("");

  // TODO: Evitar espacios

  const pressEnter = ev => {
      if (ev.keyCode === 13) {
        if (wordToSearch !== "")          
          router.push(`${path}${wordToSearch}`)
      }
  }

  return (
    <div className={styles.searcher} onKeyDown={pressEnter}>
      <input
        type="text"
        value={wordToSearch}
        placeholder={placeholder}
        onChange={(ev) => setwordToSearch(ev.target.value.trim())}
      />
      <Link href={wordToSearch === "" ? router.asPath : `${path}${wordToSearch}`}>
        <a className={styles.button} >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2502 1.02546e-06C13.6607 -0.000791296 12.1048 0.457574 10.7697 1.32007C9.43447 2.18256 8.37681 3.4124 7.724 4.8617C7.07118 6.31099 6.85102 7.91801 7.08984 9.4895C7.32867 11.061 8.01628 12.5301 9.07019 13.72L1.00024 22.88L2.12024 23.88L10.1703 14.76C11.2057 15.5693 12.4195 16.1196 13.7106 16.365C15.0017 16.6104 16.3328 16.5437 17.5929 16.1707C18.853 15.7976 20.0058 15.1288 20.9552 14.2201C21.9046 13.3114 22.6232 12.1891 23.0511 10.9465C23.4791 9.70396 23.6041 8.37703 23.4155 7.07642C23.227 5.77581 22.7304 4.53915 21.9673 3.46924C21.2041 2.39933 20.1964 1.52711 19.0281 0.925416C17.8597 0.323719 16.5644 0.00991516 15.2502 0.0100108V1.02546e-06ZM15.2502 15C13.9152 15 12.6102 14.6041 11.5001 13.8624C10.3901 13.1207 9.52493 12.0665 9.01404 10.8331C8.50315 9.59973 8.36943 8.24248 8.62988 6.93311C8.89033 5.62373 9.53329 4.42106 10.4773 3.47705C11.4213 2.53305 12.624 1.89009 13.9333 1.62964C15.2427 1.36919 16.6 1.5029 17.8334 2.01379C19.0668 2.52469 20.121 3.38985 20.8627 4.49988C21.6044 5.60991 22.0002 6.91498 22.0002 8.25C22.0002 10.0402 21.2891 11.7571 20.0232 13.023C18.7573 14.2888 17.0405 15 15.2502 15Z"
            fill="#424242"
          />
        </svg>      
        </a>  
      </Link>
    </div>
  );
};

export default Search;
