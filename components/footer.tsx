"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  // Handle smooth scrolling - Lenis会自动拦截这些方法调用
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else if (sectionId === "token-section") {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-[#0d1014] pt-12 pb-10 px-0">
      <div className="w-full px-6 md:px-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-20 mb-32">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {/* Twitter X */}
            <a href="https://x.com/hub_fun_COIN" target="_blank" rel="noopener noreferrer" 
              className="bg-[#222] w-14 h-14 rounded-full flex items-center justify-center transition-colors hover:bg-purple-500/20"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3907 10.5053L19.3815 3.5H17.9248L12.7253 9.52906L8.56855 3.5H3.41992L9.76992 12.6239L3.41992 20.0106H4.87657L10.4353 13.5999L14.8387 20.0106H19.9873L13.3899 10.5053H13.3907ZM11.0887 12.7128L10.324 11.611L5.52308 4.71498H7.81678L11.6452 10.2171L12.4099 11.3189L17.4544 18.5761H15.1607L11.0887 12.7136V12.7128Z" />
                </svg>
              </div>
            </a>
            
            {/* Telegram */}
            <a href="https://t.me/hub_fun_Official" target="_blank" rel="noopener noreferrer"
              className="bg-[#222] w-14 h-14 rounded-full flex items-center justify-center transition-colors hover:bg-purple-500/20"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/telegram.svg" alt="Telegram" width={24} height={24} className="brightness-0 invert" />
              </div>
            </a>
            
            {/* Dextools */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="bg-[#222] w-14 h-14 rounded-full flex items-center justify-center transition-colors hover:bg-purple-500/20"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/dextools.svg" alt="Dextools" width={24} height={24} className="brightness-0 invert" />
              </div>
            </a>
            
            {/* Dexscreener */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="bg-[#222] w-14 h-14 rounded-full flex items-center justify-center transition-colors hover:bg-purple-500/20"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Image src="/dexscreener.svg" alt="Dexscreener" width={24} height={24} className="brightness-0 invert" />
              </div>
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/tokenomics" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, "token-section")}
                >
                  Tokenomics
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider - Full Width */}
      <div className="border-t border-[#a1a2c3]/50 w-full"></div>
      
      {/* Copyright - Reduced top and bottom spacing */}
      <div className="w-full px-6 md:px-12 pt-6 pb-2">
        <p className="text-center text-gray-500">© 2025 hub.fun. All rights reserved.</p>
      </div>
    </footer>
  )
} 