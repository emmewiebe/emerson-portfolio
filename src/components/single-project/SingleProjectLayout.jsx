// src/components/single-project/SingleProjectLayout.jsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import FooterOne from '../../layouts/footers/FooterOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../common/Breadcrumb';
import CustomCursor from '../common/CustomCursor';
import ScrollTop from '../common/ScrollTop';
import ScrollToTop from '../common/ScrollToTop';

export default function SingleProjectLayout({ title, children, customDescription }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title={title} customDescription={customDescription} />
            {children}
          </main>
          <FooterOne />
        </div>
      </div>
      <ScrollToTop />
      <ScrollTop />
      <CustomCursor />
    </>
  );
}
