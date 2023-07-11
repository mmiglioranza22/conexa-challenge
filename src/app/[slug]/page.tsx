import Image from 'next/image'
import styles from './page.module.css'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className={styles.main}>
      <div>
        {params.slug}
      </div>
    </main>
    )
}