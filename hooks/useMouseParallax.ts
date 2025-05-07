'use client';

import { useState, useEffect } from 'react';

type ParallaxOptions = {
  intensity?: number;  // 视差强度，值越大效果越明显，默认 0.05
  reverse?: boolean;   // 是否反向，默认 false
  spring?: boolean;    // 是否使用弹簧效果，默认 true
  springConfig?: {     // 弹簧配置
    stiffness?: number; // 刚度，默认 50
    damping?: number;   // 阻尼，默认 10
  };
};

/**
 * 鼠标视差效果钩子
 * @param options 配置选项
 * @returns 包含 style 的对象，可直接应用于元素
 */
export function useMouseParallax(options: ParallaxOptions = {}) {
  const {
    intensity = 0.05,
    reverse = false,
    spring = true,
    springConfig = {
      stiffness: 50,
      damping: 10,
    },
  } = options;
  
  // 存储鼠标位置
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // 存储目标位置
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  // 存储当前位置（用于弹簧效果）
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  
  // 鼠标移动处理
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 计算鼠标位置相对于窗口中心的百分比
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
      
      // 计算目标位置
      const factor = reverse ? -1 : 1;
      setTargetPosition({
        x: x * intensity * factor,
        y: y * intensity * factor,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, reverse]);
  
  // 弹簧效果
  useEffect(() => {
    if (!spring) {
      setCurrentPosition(targetPosition);
      return;
    }
    
    const { stiffness = 50, damping = 10 } = springConfig;
    let animationFrameId: number;
    
    const updatePosition = () => {
      // 基于弹簧物理公式更新位置
      const dx = (targetPosition.x - currentPosition.x) * (stiffness / 1000);
      const dy = (targetPosition.y - currentPosition.y) * (stiffness / 1000);
      
      setCurrentPosition(prev => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    updatePosition();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [spring, targetPosition, springConfig]);
  
  // 返回可直接应用的样式
  const style = spring
    ? {
        transform: `translate3d(${currentPosition.x * 100}px, ${currentPosition.y * 100}px, 0)`,
        transition: 'transform 0.01s linear',
      }
    : {
        transform: `translate3d(${targetPosition.x * 100}px, ${targetPosition.y * 100}px, 0)`,
        transition: 'transform 0.3s ease-out',
      };
  
  return {
    style,
    mousePosition,
    targetPosition: spring ? currentPosition : targetPosition,
    raw: mousePosition,
  };
}

export default useMouseParallax; 