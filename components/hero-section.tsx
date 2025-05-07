"use client"
import Image from "next/image"
import { FlipText } from "@/components/magicui/flip-text"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center h-[83vh] border-b border-[#a1a2c3]/50 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-purple-400/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[30%] right-[35%] w-[35%] h-[35%] bg-purple-600/5 blur-[80px] rounded-full"></div>
      </div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* First grid - bottom left */}
        <div className="absolute bottom-[-5%] left-[5%] w-[600px] h-[600px] opacity-40">
          <Image src="/grid.png" alt="Background grid" fill className="object-contain" />
        </div>
        {/* Second grid - top right */}
        <div className="absolute top-[-10%] right-[5%] w-[500px] h-[500px] opacity-30">
          <Image src="/grid-2.png" alt="Background grid overlay" fill className="object-contain" />
        </div>
      </div>

      {/* Background Decorative Objects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Top Left Area */}
          <div className="absolute top-[12%] left-[15%] w-24 h-24 md:w-36 md:h-36 float-animation-1">
            <Image src="/object-1.png" alt="Decorative object 1" fill className="object-contain" />
          </div>
          <div className="absolute top-[32%] left-[8%] w-28 h-28 md:w-40 md:h-40 float-animation-2">
            <Image src="/object-2.png" alt="Decorative object 2" fill className="object-contain" />
          </div>

          {/* Top Right Area */}
          <div className="absolute top-[15%] right-[12%] w-24 h-24 md:w-36 md:h-36 float-animation-3">
            <Image src="/object-3.png" alt="Decorative object 3" fill className="object-contain" />
          </div>
          <div className="absolute top-[18%] left-[48%] w-32 h-32 md:w-44 md:h-44 float-animation-1">
            <Image src="/object-4.png" alt="Decorative object 4" fill className="object-contain" />
          </div>

          {/* Center Area */}
          <div className="absolute top-[22%] right-[32%] w-28 h-28 md:w-40 md:h-40 float-animation-2">
            <Image src="/object-5.png" alt="Decorative object 5" fill className="object-contain" />
          </div>
          <div className="absolute top-[55%] right-[42%] w-28 h-28 md:w-40 md:h-40 float-animation-3">
            <Image src="/object-6.png" alt="Decorative object 6" fill className="object-contain" />
          </div>

          {/* Bottom Area */}
          <div className="absolute bottom-[48%] left-[32%] w-24 h-24 md:w-36 md:h-36 float-animation-1">
            <Image src="/object-7.png" alt="Decorative object 7" fill className="object-contain" />
          </div>
          <div className="absolute bottom-[22%] right-[18%] w-28 h-28 md:w-40 md:h-40 float-animation-2">
            <Image src="/object-8.png" alt="Decorative object 8" fill className="object-contain" />
          </div>
          <div className="absolute bottom-[25%] right-[58%] w-24 h-24 md:w-36 md:h-36 float-animation-3">
            <Image src="/object-9.png" alt="Decorative object 9" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1500px] px-6 text-center relative z-10">
        <motion.p 
          className="text-xl mb-4 text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          hub.fun
        </motion.p>
        
        {/* 通过响应式设计，分别处理不同屏幕尺寸，包括1024px宽度 */}
        <div className="block xl:hidden">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-16 md:mb-20 lg:mb-24">
            <div className="mb-2">
              <FlipText
                duration={0.6}
                delayMultiple={0.04}
                className="inline-block"
              >
                Make Content
              </FlipText>
            </div>
            <div>
              <FlipText
                duration={0.6}
                delayMultiple={0.04}
                className="inline-block"
              >
                Worth Holding
              </FlipText>
            </div>
          </h1>
        </div>
        
        {/* 只在超大屏幕(xl: 1280px以上)显示的单行版本 */}
        <div className="hidden xl:block">
          <h1 className="text-8xl font-normal leading-tight mb-28 whitespace-nowrap">
          <FlipText
            duration={0.6}
            delayMultiple={0.04}
            className="inline-block"
          >
            Make Content Worth Holding
          </FlipText>
        </h1>
        </div>
        
        <motion.div 
          className="flex gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a 
            href="https://t.me/hub_fun_Official" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline-animation text-xl uppercase tracking-wider font-['HK_Guise_SemiBold']"
          >
            Telegram
          </a>
          <a 
            href="https://x.com/hub_fun_COIN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline-animation text-xl uppercase tracking-wider font-['HK_Guise_SemiBold']"
          >
            Twitter
          </a>
        </motion.div>
      </div>
    </section>
  )
}
