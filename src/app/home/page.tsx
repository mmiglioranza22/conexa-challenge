'use client'
import { useState, useMemo } from 'react'
import styles from './page.module.css'
import RadioInput from '@/components/RadioInput'
import Button from '@/components/Button'
import Loading from './loading'
import { SwapiCategories } from '@/types/types'
import { Card } from '@/components/Card'
import { CardContainer } from '@/components/CardContainer'
import { CardDetail } from '@/components/CardDetail'
import { normalizeModals } from '@/utils/helpers'

async function getData(url:string): Promise<any> {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export default function Home() {
  const [filter, setFilter] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [data, setData] = useState<any>()
  const [isLoading, setLoading] = useState<boolean>(false)

  const ROUTES: SwapiCategories[] = [
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

    setLoading(() => true)
    const data = await getData(url)
    setData(() => data )
    setLoading(() => false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
  }

  const handleRadio = (value : string): void => {
    setFilter(value)
  }

  const toggleDialog = (id: string) => {
    const dialog = document.getElementById(`${id}`) as HTMLDialogElement
    if (dialog?.open) {
      dialog.close()
    } else {
      dialog?.showModal()
    }
  }

  const filterOptions = ROUTES.map((value: string) => {
    return (
      <RadioInput 
        key={value} 
        checked={value === filter} 
        value={value} 
        onChange={() => handleRadio(value)}
      />
    )
  })

  const normalizeData = (data: any, type: string) => {
    switch(type as SwapiCategories) {
      case 'films':
        return (
          <>
            <Card
              className={styles.card}
              onClick={() => toggleDialog(data.title)}
            >
              Title: {data.title}
            </Card>
            <CardDetail
              className={styles}
              id={data.title}
              type={type}
              onClick={toggleDialog}>
                {data}
            </CardDetail>
          </>
        )
      case 'people':
      case 'starships':
      case 'vehicles':
      case 'species':
      case 'planets':
        return (
          <div>
            <Card
              className={styles.card}
              onClick={() => toggleDialog(data.name)}
            >
              Name: {data.name}
            </Card>
            <CardDetail
              className={styles}
              id={data.name}
              type={type}
              onClick={toggleDialog}
            >
              {data}
            </CardDetail>
          </div>
          )
    }
  } 

  const fetchDataMemo = useMemo(() => {
    return data?.results.map((value: any, i: any) => {
      return (
        <div key={i}>
          {normalizeData(value, filter)}
        </div>
      )
    })
  }, [data, filter, normalizeData])

  const fetchData = data?.results.map((value: any, i: any) => {
    const elements = normalizeData(value, filter)
    return (<div key={i}>{elements}</div>)
  })

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div style={{height: 'auto'}}>
          <form className={styles.form} method='GET' action='/api' onSubmit={handleSubmit}>
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
          <div className={styles.card_container}>
            {isLoading ? <Loading className={styles.loading} /> 
              :<CardContainer className={styles.card_container}>{fetchData}</CardContainer>}
          </div>
        </div>
      </div>
    </main>
  )
}
