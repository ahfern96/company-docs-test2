"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Diagram1 from "./diagram1.svg"

export default function Home() {

  return (
    <main className={styles.main}>
      <Diagram1/>
      <a href="https://mdxjs.com/docs/what-is-mdx/">MDX</a>
    </main>
  )
}
