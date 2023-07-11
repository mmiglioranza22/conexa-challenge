'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Button from '@/components/Button'

export default function Home() {

  const ROUTES = [
    'films',
    'people',
    'planets',
    'species',
    'starships',
    'vehicles'
  ]

  const navLinks =  ROUTES.map((el: string) => (
    <Button className={styles.button} key={el}>
      {/* <Link href={`/${el}`}> */}
        {el.toUpperCase()}
      {/* </Link> */}
    </Button>
  ))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log({e: e.target})
  }

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <form className={styles.form} action="" method="get" onSubmit={handleSubmit}>
          <nav className={styles.links}>
            {navLinks} 
          </nav>
          <input className={styles.input} placeholder='Search...' type="text" />
        </form>
      </div>
    </main>
  )
}
