"use client"

import { ReactNode, useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

interface LenisProviderProps {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // 初始化Lenis，使用基本配置
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 平滑的缓动函数
    })

    // 将Lenis与requestAnimationFrame结合
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    
    // 存储lenis实例到ref中，以便可以在其他地方访问
    lenisRef.current = lenis

    // 覆盖原生的scrollTo
    const originalScrollTo = window.scrollTo
    window.scrollTo = function(...args: any[]) {
      if (args.length === 1 && typeof args[0] === 'object' && args[0].behavior === 'smooth' && typeof args[0].top === 'number') {
        lenis.scrollTo(args[0].top, { lock: true })
        return
      }
      // 回退到原生滚动
      originalScrollTo.apply(window, args as any)
    }

    // 自定义元素scrollIntoView方法
    const originalScrollIntoView = Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function(options?: boolean | ScrollIntoViewOptions) {
      if (options === undefined || options === true || (typeof options === 'object' && options.behavior === 'smooth')) {
        const element = this as HTMLElement
        lenis.scrollTo(element, { lock: true })
        return
      }
      // 回退到原生滚动
      originalScrollIntoView.apply(this, [options as boolean | ScrollIntoViewOptions])
    }

    return () => {
      // 清理
      lenis.destroy()
      window.scrollTo = originalScrollTo
      Element.prototype.scrollIntoView = originalScrollIntoView
    }
  }, [])

  return (
    <>{children}</>
  )
} 