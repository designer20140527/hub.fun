"use client"
import SectionIndicator from "./section-indicator"
import Image from "next/image"
import { TextReveal } from "@/components/magicui/text-reveal"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function IntroSection() {
  // 创建图片容器的引用
  const imageRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  
  // 设置图片的滚动动画
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0 1", "0.5 0.5"]
  })

  // 设置按钮的滚动动画
  const { scrollYProgress: buttonScrollProgress } = useScroll({
    target: buttonRef,
    offset: ["0 0.8", "0.3 0.5"]  // 调整触发时机，让动画更早开始
  })
  
  // 将滚动进度转换为不透明度值
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], [50, 0])
  const buttonOpacity = useTransform(buttonScrollProgress, [0, 1], [0, 1])
  const buttonY = useTransform(buttonScrollProgress, [0, 1], [30, 0])  // 增加Y轴移动距离使动画更明显

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* 01/03 circle indicator - centered */}
        <div className="flex justify-center mb-16">
          <SectionIndicator number="01" total="05" />
        </div>

        {/* Main content - centered and larger */}
        <div className="mb-16 text-center">  {/* 增加下边距 从mb-8改为mb-16 */}
          <TextReveal>
            hub.fun is a Web3 social platform that enables one-click community and token creation, AI-powered management, token-gated content, and short video rewards—all designed to turn engagement into ownership.
          </TextReveal>
        </div>

        {/* Button with scroll animation */}
        <motion.div 
          ref={buttonRef}
          className="flex justify-center mb-16"
          style={{
            opacity: buttonOpacity,
            y: buttonY,
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"  // 添加过渡效果使动画更流畅
          }}
        >
          <a 
            href="https://hub-fun.gitbook.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-animation text-xl uppercase tracking-wider font-['HK_Guise_SemiBold']"
          >
            GITBOOK
          </a>
        </motion.div>

        {/* Image container - with fade in effect */}
        <motion.div 
          ref={imageRef}
          className="w-full rounded-lg overflow-hidden mx-auto"
          style={{ 
            opacity: imageOpacity,
            y: imageY
          }}
        >
          <Image 
            src="/image-1.png" 
            alt="hub.fun platform overview" 
            width={2000}
            height={800}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
