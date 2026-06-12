'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const rx = useSpring(mouseX, { damping: 22, stiffness: 180, mass: 0.5 });
  const ry = useSpring(mouseY, { damping: 22, stiffness: 180, mass: 0.5 });

  useEffect(() => {
    const move = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };

    const over = () => {
      dotRef.current?.classList.add('dot-h');
      ringRef.current?.classList.add('ring-h');
    };
    const out = () => {
      dotRef.current?.classList.remove('dot-h');
      ringRef.current?.classList.remove('ring-h');
    };

    window.addEventListener('mousemove', move);
    const attach = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', over);
        el.addEventListener('mouseleave', out);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { window.removeEventListener('mousemove', move); obs.disconnect(); };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div ref={dotRef} style={{
        x: mouseX, y: mouseY, position: 'fixed', top: 0, left: 0,
        width: 7, height: 7, borderRadius: '50%', backgroundColor: '#d4522a',
        pointerEvents: 'none', zIndex: 99999, translateX: '-50%', translateY: '-50%',
      }} />
      <motion.div ref={ringRef} style={{
        x: rx, y: ry, position: 'fixed', top: 0, left: 0,
        width: 36, height: 36, borderRadius: '50%',
        border: '1.5px solid rgba(212,82,42,0.4)',
        pointerEvents: 'none', zIndex: 99998, translateX: '-50%', translateY: '-50%',
      }} />
      <style jsx global>{`
        .dot-h  { width:11px!important; height:11px!important; background-color:#1a1a14!important; }
        .ring-h { width:58px!important; height:58px!important;
                  border-color:rgba(26,26,20,0.5)!important;
                  transition:width .22s ease,height .22s ease,border-color .22s ease; }
      `}</style>
    </>
  );
}
