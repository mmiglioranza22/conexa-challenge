'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Button from '@/components/Button'
import ApiClient from '@/utils/apiClient'
import { useState } from 'react'


export default function Home() {

const [filter, setFilter] = useState<string>('')
const [query, setQuery] = useState<string>('')

  const ROUTES = [
    'films',
    'people',
    'planets',
    'species',
    'starships',
    'vehicles'
  ]

  const navLinks =  ROUTES.map((el: string) => (
    // <Button className={styles.button} key={el}>
    //   {/* <Link href={`/${el}`}> */}
    //     {el.toUpperCase()}
    //   {/* </Link> */}
    // </Button>
<div key={el}>
  <input type="radio" name="filter" id={el} value={el} />
  <label htmlFor={el}>{el.toUpperCase()}</label>
</div>
  ))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log({e: e.target})
    const response = await ApiClient.request('films')

    // eslint-disable-next-line no-console
    console.log({response})

    
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setQuery(e.target.value)

  }

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value)
  }

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <form className={styles.form} action="" method="get" onSubmit={handleSubmit}>
          <nav className={styles.links}>
            {navLinks} 
          </nav>
          <input className={styles.input} onChange={handleChange} value={query} placeholder='Search...' type="text" />
        </form>
      </div>
    </main>
  )
}
