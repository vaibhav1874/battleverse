'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  X, 
  Camera, 
  MessageCircle, 
  UserPlus, 
  Zap 
} from 'lucide-react';
import styles from './FloatingMenu.module.css';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: 'Discord',
      icon: Zap,
      href: 'https://discord.gg/Mv5Qkq5r',
      color: '#5865F2',
      delay: 0.1
    },
    {
      name: 'Instagram',
      icon: Camera,
      href: 'https://www.instagram.com/battleverse.hq?igsh=MWg0dWg4NW94YmZ0bA==',
      color: '#e1306c',
      delay: 0.2
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://chat.whatsapp.com/CX47jPP3cpXIWTvUaV9P99',
      color: '#25d366',
      delay: 0.3
    }
  ];

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {isOpen && (
          <div className={styles.menuItems}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 260, 
                  damping: 20, 
                  delay: item.delay 
                }}
                className={styles.itemWrapper}
              >
                <span className={styles.itemLabel}>{item.name}</span>
                <Link 
                  href={item.href} 
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  className={styles.menuItem}
                  style={{ backgroundColor: item.color }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        className={`${styles.mainButton} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: isOpen ? 45 : 0,
          backgroundColor: isOpen ? 'var(--secondary)' : 'var(--primary)'
        }}
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
        {!isOpen && (
          <motion.div 
            className={styles.pulse}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        )}
      </motion.button>
    </div>
  );
}
