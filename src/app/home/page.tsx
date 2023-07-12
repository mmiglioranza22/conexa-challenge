'use client'
import { useState } from 'react'
import styles from './page.module.css'
import RadioInput from '@/components/RadioInput'
import Button from '@/components/Button'

async function getData(url:string) {
  const res = await fetch(url)
  if (!res.ok) {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    let url: string = `/api/${filter}`
    
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

  const handleRadio = (value : string): void => {
    setFilter(value)
  }

  const filterOptions = ROUTES.map((value: string) => {
   return (
    <RadioInput 
      key={value} 
      checked={value === filter} 
      value={value} 
      onChange={() => handleRadio(value)}
      // onClick={handleSubmit} 
    />)
  })


  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.links}>
            <Button type="submit" className={styles.radio_button}>{filterOptions}</Button>
          </div>

          {/* <input
            type="text"
            placeholder='Search...'
            className={styles.input}
            onChange={handleChange}
            value={query}
          /> */}
        </form>
      </div>
      <div>

      </div>
    </main>
  )
}
