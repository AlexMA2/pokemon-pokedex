import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import CustomLayout from '../components/CustomLayout'
import Search from '../components/Search'
import LogoGitHub from '../assets/GitHub-Mark-32px.png'

export default function Home() {
  return (
    <CustomLayout className={styles.container} title=" Wopoke | Una pokedex de pokemon" metadata={{ description: "Esta es una pagina web creada con Next", author: "Alex" }}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://github.com/AlexMA2/pokemon-pokedex" target="_blank"
            rel="noopener noreferrer"> Wopoke</a>
        </h1>
        <Search placeholder="Busca a tu pokemon..." />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/AlexMA2/pokemon-pokedex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.p2}> Hecho por</p> <Image className={styles.p2} src={LogoGitHub} alt="Logo de GitHub" width={32} height={32} /> <strong className={styles.p2}>Alex Mamani</strong>
        </a>
      </footer>
    </CustomLayout>
  )
}
