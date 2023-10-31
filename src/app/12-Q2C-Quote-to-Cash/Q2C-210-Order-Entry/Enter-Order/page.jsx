"use client"

import Link from "next/link"
import Image from 'next/image'


export default function Page(){
    return(
        <main>
            <h1>Enter Order</h1>
            <ol type="1">
                <li>1. Select Appropriate Site</li>
                <li>2. Open "Order Entry"</li>
                <li>3. Create new order</li>
                <li>4. Enter Order Details</li>
                <li>4a. Select the Customer</li>
                <li>4a. Enter Customer</li>
                <li>5. Enter Line(s) Details</li>
                <li>6. Verify Release(s) Details</li>
                <li>6. Need Additional line(s) information</li>
            </ol>
            <img src={"/select-site1.png"} />
        </main>
    )
}