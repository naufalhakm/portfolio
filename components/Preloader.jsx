'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) requestAnimationFrame(tick);
      else {
        setCount(100);
        setTimeout(() => { setDone(true); setTimeout(onComplete, 700); }, 300);
      }
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-end justify-between p-8 md:p-14"
          style={{ backgroundColor: '#1a1a14' }}
        >
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-syne)', color: '#6b6554' }}
          >
            Naufal Hakim
          </motion.span>

          <div
            className="text-[clamp(5rem,15vw,14rem)] font-bold leading-none tabular-nums"
            style={{ fontFamily: 'var(--font-syne)', color: '#f5f0e8' }}
          >
            {String(count).padStart(3, '0')}
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{
              width: `${count}%`,
              backgroundColor: '#d4522a',
              transition: 'width 0.05s linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
