'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';
import Marquee from '@/components/Marquee';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <>
      <CustomCursor />
      <Preloader onComplete={handlePreloaderComplete} />

      <SmoothScroll>
        <Navbar />
        <main style={{ backgroundColor: '#f5f0e8' }}>
          {/* Hero */}
          <Hero isReady={preloaderDone} />

          {/* About — cream to darker cream */}
          <PageTransition bgFrom="#f5f0e8" bgTo="#eee9de">
            <About />
          </PageTransition>

          {/* Work — horizontal scroll pinned section */}
          <Work />

          {/* Marquee ticker before Contact — dramatic dark strip */}
          <div data-theme="dark" style={{ backgroundColor: '#1a1a14', borderTop: '1px solid #2a2a1e', borderBottom: '1px solid #2a2a1e' }}>
            <Marquee
              items={['Let\'s Talk', 'Available For Hire', 'Open To Opportunities', 'Jakarta, Indonesia', 'Remote Friendly']}
              speed={40}
              separator="✦"
              dark
            />
          </div>

          {/* Contact — cream to dark */}
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
