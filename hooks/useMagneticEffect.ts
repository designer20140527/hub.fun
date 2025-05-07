'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

type MagneticEffectOptions = {
  strength?: number;  // 磁性强度，默认 0.5
  radius?: number;    // 磁性半径，默认 150px
  ease?: number;      // 缓动系数，默认 0.15
};

/**
 * 磁性效果钩子，使元素对鼠标产生磁性吸引
 * @param options 配置选项
 * @returns 包含 ref 的对象，将此 ref 应用于需要磁性效果的元素
 */
export function useMagneticEffect<T extends HTMLElement = HTMLElement>(
  options: MagneticEffectOptions = {}
) {
  const {
    strength = 0.5,
    radius = 150,
    ease = 0.15,
  } = options;
  
  const elementRef = useRef<T>(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  // 存储元素的初始位置和当前位置
  const initialPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    
    // 保存元素的初始位置
    initialPos.current = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    currentPos.current = { ...initialPos.current };
    
    // 处理窗口大小变化
    const handleResize = () => {
      if (!element) return;
      
      const newRect = element.getBoundingClientRect();
      initialPos.current = {
        x: newRect.left + newRect.width / 2,
        y: newRect.top + newRect.height / 2,
      };
    };
    
    // 鼠标移动处理函数
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // 计算鼠标与元素中心的距离
      const dx = clientX - initialPos.current.x;
      const dy = clientY - initialPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // 如果鼠标在磁性半径内
      if (distance < radius) {
        setIsHovering(true);
        
        // 计算位移量，距离越近，位移越大
        const power = (radius - distance) / radius;
        const targetX = initialPos.current.x + dx * power * strength;
        const targetY = initialPos.current.y + dy * power * strength;
        
        // 使用缓动公式更新当前位置
        currentPos.current.x += (targetX - currentPos.current.x) * ease;
        currentPos.current.y += (targetY - currentPos.current.y) * ease;
        
        // 应用变换
        element.style.transform = `translate(${currentPos.current.x - initialPos.current.x}px, ${currentPos.current.y - initialPos.current.y}px)`;
      } else if (isHovering) {
        setIsHovering(false);
      }
    };
    
    // 动画循环函数
    const animateBack = () => {
      if (!isHovering && (
        Math.abs(currentPos.current.x - initialPos.current.x) > 0.1 ||
        Math.abs(currentPos.current.y - initialPos.current.y) > 0.1
      )) {
        // 缓动回到初始位置
        currentPos.current.x += (initialPos.current.x - currentPos.current.x) * ease;
        currentPos.current.y += (initialPos.current.y - currentPos.current.y) * ease;
        
        element.style.transform = `translate(${currentPos.current.x - initialPos.current.x}px, ${currentPos.current.y - initialPos.current.y}px)`;
      } else if (!isHovering) {
        // 完全回到初始位置
        currentPos.current = { ...initialPos.current };
        element.style.transform = '';
      }
      
      animationRef.current = requestAnimationFrame(animateBack);
    };
    
    // 启动动画循环
    animationRef.current = requestAnimationFrame(animateBack);
    
    // 事件监听
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ease, isHovering, radius, strength]);
  
  return { ref: elementRef, isHovering };
}

export default useMagneticEffect; 