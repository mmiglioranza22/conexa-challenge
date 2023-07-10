import Image from 'next/image'
import styles from './page.module.css'
import GreetingMsg from '@/components/GreetingMsg'
import Button from '@/components/Button'

export default function Home() {

  return (
    <main className={`${styles.main} fade_in`}>
      <div className={styles.container}>
        <GreetingMsg className={`${styles.message} fade_in`}>
          <p>Greetings soldier</p>
          <p>Lord Vader was expecting you</p>
        </GreetingMsg>
        <Button className={`${styles.button} fade_in`}>
          Execute order
        </Button>
      </div>
    </main>
  )
}
