import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import b from '@/styles/border.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [loading, setLoading] = useState(false)
  const [exploded, setExploded] = useState(false)

  useEffect(() => {
    //wait two seconds then set loading to true
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])

  return (
    <>
      <Head>
        <title>Evil</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {
          !loading ? (
            <img src="/wizard-code.jpg" alt="evil" className={styles.evil} />
          ) : (
            exploded ? <div className={styles.exploded}>
              <img src="/explosion.gif" alt="explosion" className={styles.explode} />
            </div> :
            <div className={`${styles.clicktodefeat} ${b.gradientborder}`}
              onClick={
                () => {
                  setExploded(true)
                }
              }
            >
              <h3>Click to defeat the wizard</h3>
              <img src="orb.jpeg" alt="orb" className={styles.orb} />
            </div>
          )
        }
      </main>
    </>
  )
}
