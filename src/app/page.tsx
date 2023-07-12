
import styles from './page.module.css'
import GreetingMsg from '@/components/GreetingMsg'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Landing() {

  return (
    <main className={`${styles.main} fade_in`}>
      <div className={styles.container}>
        <GreetingMsg className={`${styles.message} fade_in`}>
          <p>Lord Vader was expecting you</p>
        </GreetingMsg>
        <Button type='button' className={`${styles.button} fade_in`}>
          <Link href={'/home'}> 
          Execute order
          </Link>
        </Button>
      </div>
    </main>
  )
}
