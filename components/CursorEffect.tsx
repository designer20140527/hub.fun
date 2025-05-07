'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 检测浏览器环境和设备类型
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches) {
      setIsVisible(true);
      
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);
      
      const handlePointerDetection = () => {
        const hoveredElements = document.querySelectorAll('a, button, [role="button"], .clickable, input, select, textarea');
        
        hoveredElements.forEach(el => {
          el.addEventListener('mouseenter', () => setIsPointer(true));
          el.addEventListener('mouseleave', () => setIsPointer(false));
        });
      };
      
      // 初始化指针检测
      handlePointerDetection();
      
      // 监听DOM变化，为新添加的元素绑定事件
      const observer = new MutationObserver(() => {
        handlePointerDetection();
      });
      
      observer.observe(document.body, { childList: true, subtree: true });
      
      // 添加全局事件监听
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      
      // 清理函数
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        observer.disconnect();
      };
    }
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* 主光标圆圈 */}
      <motion.div
        className="fixed pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          left: 0,
          top: 0,
          x: position.x - 16,
          y: position.y - 16,
        }}
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          mass: 0.8,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="16" 
            cy="16" 
            r="15" 
            stroke={isPointer ? '#A855F7' : 'rgba(255, 255, 255, 0.6)'} 
            strokeWidth="1.5"
            strokeOpacity={isPointer ? "0.9" : "0.6"}
            fill={isPointer ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.05)'}
          />
        </svg>
      </motion.div>
      
      {/* 光标点 */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-white"
        style={{
          left: 0,
          top: 0,
          x: position.x - 3,
          y: position.y - 3,
        }}
        animate={{
          scale: isClicking ? 1.8 : 1,
          opacity: 0.9,
          backgroundColor: isPointer ? '#A855F7' : '#ffffff',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20,
        }}
      />
      
      {/* 跟随轨迹效果 */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9998] w-1 h-1 rounded-full"
          style={{
            left: 0,
            top: 0,
          }}
          animate={{
            x: position.x - 2,
            y: position.y - 2,
            opacity: 0.3 - i * 0.06,
            scale: 1 - i * 0.1,
            backgroundColor: isPointer ? '#A855F7' : '#ffffff',
          }}
          transition={{
            delay: i * 0.03,
            x: { type: "spring", stiffness: 400 - i * 70, damping: 20 },
            y: { type: "spring", stiffness: 400 - i * 70, damping: 20 },
          }}
        />
      ))}
      
      {/* 只隐藏鼠标指针，不影响其他内容 */}
      <style jsx global>{`
        html, body {
          cursor: none !important;
        }
        
        /* 在平板和移动设备上保留默认鼠标 */
        @media (max-width: 1023px) {
          html, body {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorEffect; 