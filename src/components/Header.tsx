import { BellIcon, MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {
    const [isScrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/dinami.svg?alt=media&token=f2026be5-f760-435a-baef-37be18999aab"
              width={100}
              height={100}
              alt=""
              className="cursor-pointer object-contain"
            />
            <ul className="hidden space-x-4 md:flex">
                {/* <li className="headerLink">Home</li>
                <li className="headerLink">Messages</li>
                <li className="headerLink">Positions</li>
                <li className="headerLink">News</li> 
                <li className="headerLink">My list</li> */}
            </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
            {/* <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline"/> */}
            <a target="_blank" href="https://www.youtube.com/@devippo/videos" rel="noopener noreferrer">
                <GlobeAltIcon className="h-6 w-6"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/tyrone-ranson-702815173" rel="noopener noreferrer">
            <img
                src="https://firebasestorage.googleapis.com/v0/b/dinami-27097.appspot.com/o/icons8-linkedin-circled-144.png?alt=media&token=29c57624-2127-43b1-8a08-042c2177c01d"
                alt=""
                width={30}
                height={30}
                />
            </a>
        </div>
    </header>
  )
}

export default Header