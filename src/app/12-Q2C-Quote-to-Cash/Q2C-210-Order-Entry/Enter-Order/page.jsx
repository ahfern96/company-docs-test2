"use client"

import Link from "next/link"
import Image from 'next/image'
import Diagram1 from './AAA-interactive-test.svg'


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
            {/* <img src={"/select-site1.png"} /> */}
            {/* <Diagram1/> */}
            {/* <iframe src="https://ferncous-my.sharepoint.com/personal/aiden_hoffman_fernco_com/_layouts/15/embed.aspx?UniqueId=eb134653-3d8b-4030-bec2-925114d27859&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="select-site.mp4"></iframe> */}
        </main>
    )
}