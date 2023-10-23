import Image from 'next/image'
import styles from './page.module.css'
import Logo from "./diagram1.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      Hello
      {/* <Image 
        src="/diagram1.svg"
        width={500}
        height={500}
        data="/diagram1.svg"
      /> */}
      <Logo/>
    </main>
  )
}
