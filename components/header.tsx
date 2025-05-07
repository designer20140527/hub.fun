"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home")

  // Listen for scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // If at top, set Home as active
      if (scrollPosition < 300) {
        setActiveSection("home")
      } else {
        // Check if token section is in view
        const tokenSection = document.getElementById("token-section")
        if (tokenSection) {
          const tokenSectionTop = tokenSection.offsetTop
          if (scrollPosition >= tokenSectionTop - 200) {
            setActiveSection("tokenomics")
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle smooth scrolling - Lenis会自动拦截这些方法调用
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      setActiveSection("home")
    } else if (sectionId === "token-section") {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        setActiveSection("tokenomics")
      }
    }
  }

  return (
    <header className="h-[10vh] flex items-center justify-between px-6 md:px-12 border-b border-[#a1a2c3]/50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 relative">
          <Image src="/logo-white.png" alt="hub.fun logo" fill className="object-contain" />
        </div>
        <span className="text-xl"><span className="font-['HK_Guise_SemiBold']">hub.</span>fun</span>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li className="relative group">
            <Link 
              href="/" 
              className={`transition-colors relative ${activeSection === "home" ? "text-purple-400" : "hover:text-purple-400"}`}
              onClick={(e) => scrollToSection(e, "home")}
            >
              Home
              <span className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 transition-all duration-300 ${activeSection === "home" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
            </Link>
          </li>
          <li className="relative group">
            <Link 
              href="/tokenomics" 
              className={`transition-colors relative ${activeSection === "tokenomics" ? "text-purple-400" : "hover:text-purple-400"}`}
              onClick={(e) => scrollToSection(e, "token-section")}
            >
              Tokenomics
              <span className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 transition-all duration-300 ${activeSection === "tokenomics" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
