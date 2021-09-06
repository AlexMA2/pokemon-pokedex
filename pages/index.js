import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import CustomLayout from '../components/CustomLayout'

export default function Home() {
  return (
    <CustomLayout className={styles.container} title="Mi pagina" metadata={{ description: "Esta es una pagina web creada con Next", author: "Alex" }}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/cursos">
          <a> Ver los cursos </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </CustomLayout>
  )
}
