"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'


export default function Page(){
    const pathname = usePathname()
    return(
        <main>
            <h1>12-Q2C-Quote to Cash</h1>
            <ul>
                <li><Link href="">Q2C-110 Quote Customer</Link></li>
                <li><Link href={pathname + "/Q2C-210-Order-Entry"}>Q2C-210 Order Entry</Link></li>
                <li><Link href="">Q2C-230 Counter Sale</Link></li>
                <li><Link href="">Q2C-220 Change Order</Link></li>
                <li><Link href="">Q2C-310 Pick Pack Ship</Link></li>
                <li><Link href="">Q2C-410 Invoice (AR-300 EUP)</Link></li>
                <li><Link href="">Q2C-510 Cash Receipt (AR-305 EUP)</Link></li>
            </ul>
        </main>
    )
}

// # 12-Q2C-Quote to Cash
// Q2C-110 Quote Customer
// [Q2C-210 Order Entry](./12-Q2C-Quote-to-Cash/Q2C-210-Order-Entry)
// Q2C-230 Counter Sale
// Q2C-220 Change Order
// Q2C-310 Pick Pack Ship
// Q2C-410 Invoice (AR-300 EUP)
// Q2C-510 Cash Receipt (AR-305 EUP)