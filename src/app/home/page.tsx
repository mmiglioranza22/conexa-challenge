'use client'
import { useState, useMemo, useCallback, useEffect } from 'react'
import styles from './page.module.css'
import RadioInput from '@/components/RadioInput'
import Button from '@/components/Button'
import Loading from './loading'
import { SwapiCategories } from '@/types/types'
import { Card } from '@/components/Card'
import { CardContainer } from '@/components/CardContainer'
import { CardDetail } from '@/components/CardDetail'
import { log } from 'console'

async function getData(url:string): Promise<any> {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}

export default function Home() {
  const [filter, setFilter] = useState<string>('')
  const [data, setData] = useState<any>()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [nextPage, setNextPage] = useState<number>(1)
  const [prevPage, setPrevPage] = useState<number>(0)

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
    const test = process.env.NODE_ENV === 'test';
    const server = test ? 'http://localhost:3000' : '';

    let url: string = `${server}/api/${filter}`
    
    setLoading(() => true)
    const data = await getData(url)
    setData(() => data )
    if (data.next) {
      setNextPage(() => Number((data.next).split('=')[1]))
      // eslint-disable-next-line no-console
      console.log({nextPage})
      setPrevPage(nextPage)
    }

    setLoading(() => false)
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

  const normalizeData = useCallback((data: any, type: string) => {
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
  }, [])

  // const fetchDataMemo = useMemo(() => {
  //   return data?.results.map((value: any, i: any) => {
  //     return (
  //       <div key={i}>
  //         {normalizeData(value, filter)}
  //       </div>
  //     )
  //   })
  // }, [data, filter, normalizeData])

  const fetchData = data?.results?.map((value: any, i: any) => {
    const elements = normalizeData(value, filter)
    return (<div key={i}>{elements}</div>)
  })

  const handleNext = async () => {
    const test = process.env.NODE_ENV === 'test';
    const server = test ? 'http://localhost:3000' : '';

    let url: string = `${server}/api/${filter}`
    url = `${url}/?page=${nextPage}`

    setLoading(() => true)
    const data = await getData(url)
    setData(() => data )
    if (data.next) {
      setNextPage(() => Number((data.next).split('=')[1]))
      setPrevPage(() => nextPage)
    }
    setLoading(() => false)
  }

  const handlePrevious = async () => {
    const test = process.env.NODE_ENV === 'test';
    const server = test ? 'http://localhost:3000' : '';

    let url: string = `${server}/api/${filter}`
    url = `${url}/?page=${prevPage}`

    setLoading(() => true)
    const data = await getData(url)
    setData(() => data )
    setNextPage(() => nextPage)
    setPrevPage(() => prevPage - 1)
    setLoading(() => false)
  }

  useEffect(() => {
// eslint-disable-next-line no-console
console.log({nextPage, prevPage})
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
          {data?.next ? 
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type="button" className={styles.button} onClick={handlePrevious}>Previous</Button>
            <Button type="button" className={styles.button} onClick={handleNext}>Next</Button>

          </div>
          : null}
        </div>
      </div>
    </main>
  )
}
