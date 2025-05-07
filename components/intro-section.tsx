"use client"
import SectionIndicator from "./section-indicator"
import Image from "next/image"
import { TextReveal } from "@/components/magicui/text-reveal"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function IntroSection() {
  // 创建图片容器的引用
  const imageRef = useRef<HTMLDivElement>(null)
  
  // 设置图片的滚动动画
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0 1", "0.5 0.5"] // 使用数字格式："0 1"表示"start bottom"，"0.5 0.5"表示"center center"
  })
  
  // 将滚动进度转换为不透明度值
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* 01/03 circle indicator - centered */}
        <div className="flex justify-center mb-16">
          <SectionIndicator number="01" total="05" />
        </div>

        {/* Main content - centered and larger */}
        <div className="mb-16 text-center">
          <TextReveal>
            hub.fun is a Web3 social platform that enables one-click community and token creation, AI-powered management, token-gated content, and short video rewards—all designed to turn engagement into ownership.
          </TextReveal>
        </div>

        {/* Image container - with fade in effect */}
        <motion.div 
          ref={imageRef}
          className="w-full rounded-lg overflow-hidden mx-auto my-12"
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
