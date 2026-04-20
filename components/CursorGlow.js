'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Global Spotlight Effect */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1,
          pointerEvents: 'none',
          background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(188, 19, 254, 0.05), transparent 80%)`,
        }}
        animate={{
          background: `radial-gradient(800px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(188, 19, 254, 0.08), transparent 80%)`,
        }}
      />

      {/* Main Cursor Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          borderRadius: '50%',
          border: `2px solid ${isHovered ? '#00f3ff' : '#00ffa3'}`,
          boxShadow: `0 0 ${isHovered ? '20px' : '10px'} ${isHovered ? '#00f3ff' : '#00ffa3'}`,
          zIndex: 9999,
          pointerEvents: 'none',
          x: cursorX,
          y: cursorY,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 400,
        }}
      />

      {/* Center Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#fff',
          zIndex: 10000,
          pointerEvents: 'none',
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  );
}
