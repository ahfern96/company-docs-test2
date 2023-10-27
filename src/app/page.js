"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {

  return (
    <main className={styles.main}>
      <h1>Proceedures</h1>
      <ul>
        <li><Link href="01-AP-Accounts-Payable">01-AP-Accounts Payable</Link></li>
        <li><Link href="02-AR-Accounts-Receivable">02-AR-Accounts Receivable</Link></li>
        <li><Link href="03-CS-Customer-Service">03-CS-Customer Service</Link></li>
        <li><Link href="04-ENG-Engineering">04-ENG-Engineering</Link></li>
        <li><Link href="05-FIN-Finance">05-FIN-Finance</Link></li>
        <li><Link href="06-LAB-Labor-Track">06-LAB-Labor Track</Link></li>
        <li><Link href="07-IT-Information-Tech">07-IT-Information Tech</Link></li>
        <li><Link href="08-INVT-Inventory-Mng">08-INVT-Inventory Mng</Link></li>
        <li><Link href="09-P2P-Procure-to-Pay">09-P2P-Procure-to-Pay</Link></li>
        <li><Link href="10-PUR-Purchasing">10-PUR-Purchasing</Link></li>
        <li><Link href="11-QA-Quality">11-QA-Quality</Link></li>
        <li><Link href="12-Q2C-Quote-to-Cash">12-Q2C-Quote-to-Cash</Link></li>
        <li><Link href="13-RSTK-Replenish-Stock">13-RSTK-Replenish-Stock</Link></li>
        <li><Link href="14-SLS-Sales">14-SLS-Sales</Link></li>
      </ul>
    </main>
  )
}
