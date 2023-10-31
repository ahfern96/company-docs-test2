import Link from "next/link"

export default function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><Link href={'/'}>Home</Link></li>
            </ul>
        </div>
    )
}