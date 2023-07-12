'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import Button from '@/components/Button'
import ApiClient from '@/utils/apiClient'
import RadioInput from '@/components/RadioInput'

async function getData(url:string) {
  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // eslint-disable-next-line no-console
  console.log({res})
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


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

  const filterOptions =  ROUTES.map((el: string) => <RadioInput key={el} value={el} />)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    let url: string = `http:/localhost:8080/${filter}`
    
    if (query.length > 0) {
      url = `${url}/?search=${query}`
    }

    // eslint-disable-next-line no-console
    console.log({url})

    const req = await getData(url)
    // eslint-disable-next-line no-console
    console.log({req})

    
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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.links}>
            {filterOptions} 
          </div>
          <input className={styles.input} onChange={handleChange} value={query} placeholder='Search...' type="text" />
        </form>
      </div>
    </main>
  )
}
