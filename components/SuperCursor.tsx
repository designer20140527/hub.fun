'use client';

import { useState, useEffect } from 'react';

const SuperCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        !!target.closest('a') || 
        !!target.closest('button') ||
        target.classList.contains('clickable');
      
      setIsHovering(Boolean(isInteractive));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  return (
    <>
      {/* 外部圆环 */}
      <div
        style={{
          position: 'fixed',
          top: position.y - 16,
          left: position.x - 16,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `2px solid ${isHovering ? '#A855F7' : '#FFFFFF'}`,
          backgroundColor: 'transparent',
          transform: `scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
          transition: 'transform 0.4s ease, border-color 0.4s ease',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      
      {/* 内部圆点 */}
      <div
        style={{
          position: 'fixed',
          top: position.y - 2,
          left: position.x - 2,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: isHovering ? '#A855F7' : '#FFFFFF',
          transform: `scale(${isClicking ? 1.5 : 1})`,
          transition: 'transform 0.4s ease, background-color 0.4s ease',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default SuperCursor;