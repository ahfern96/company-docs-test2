"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Diagram1 from "./diagram1.svg"

export default function Home() {

  return (
    <main className={styles.main}>
      <Diagram1/><br/>
      <a href="https://mdxjs.com/docs/what-is-mdx/">MDX</a><br/>
      <a href="https://youtu.be/n2CV6f0vFr4?t=386">MDX next with app directory</a>
    </main>
  )
}
