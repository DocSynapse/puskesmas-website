// Chief's Main App - Puskesmas Balowerti Digital Sanctuary
// Cream Color Palette: #C9A87C

import { ReactLenis, useLenis } from 'lenis/react';
import { lazy, Suspense, useEffect } from 'react';

// Above-fold — eager load
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import StoryScroll from './components/StoryScroll';
import WAFloatingButton from './components/WAFloatingButton';

// Below-fold — lazy load
const About        = lazy(() => import('./sections/About'));
const Doctors      = lazy(() => import('./sections/Doctors'));
const PatientFlow  = lazy(() => import('./sections/PatientFlow'));
const Diseases     = lazy(() => import('./sections/Diseases'));
const Services     = lazy(() => import('./sections/Services'));
const Facilities   = lazy(() => import('./sections/Facilities'));
const USG          = lazy(() => import('./sections/USG'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Reservation  = lazy(() => import('./sections/Reservation'));
const Location     = lazy(() => import('./sections/Location'));
const Footer       = lazy(() => import('./sections/Footer'));

const NAV_HEIGHT = 72;

// Hook: bridge Lenis scrollTo ke anchor click handler di main.tsx
function LenisBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    // Expose lenis instance ke window agar global handler di main.tsx bisa pakai
    (window as Window & { __lenis?: typeof lenis }).__lenis = lenis;
    return () => { delete (window as Window & { __lenis?: typeof lenis }).__lenis; };
  }, [lenis]);

  return null;
}

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        infinite: false,
        anchors: false,
      }}
    >
      <LenisBridge />
    <div className="relative min-h-screen bg-[#F8F5F2]">
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,168,124,0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div className="grain-overlay" />
      <div className="px-4">
        <Navigation />
      </div>
      <StoryScroll />
      <WAFloatingButton />
      <main className="relative">
        {/* Hero — above fold, tidak perlu reveal */}
        <Hero />
        <Suspense fallback={null}>
          <div data-reveal="left"><About /></div>
          <div data-reveal="right"><Doctors /></div>
          <div data-reveal="left"><PatientFlow /></div>
          <div data-reveal="right"><Diseases /></div>
          <div data-reveal="left"><Services /></div>
          <div data-reveal="right"><Facilities /></div>
          <div data-reveal="left"><USG /></div>
          <div data-reveal="right"><Testimonials /></div>
          <div data-reveal="left"><Reservation /></div>
          <div data-reveal="right"><Location /></div>
          <div data-reveal><Footer /></div>
        </Suspense>
      </main>
    </div>
    </ReactLenis>
  );
}

export { NAV_HEIGHT };
export default App;
