import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import SkillArea from './SkillArea';
import ResumeArea from './ResumeArea';
import LifePhotoReel from './LifePhotoReel'; // ✅ Life reel
import Breadcrumb from '../common/Breadcrumb';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterOne from '../../layouts/footers/FooterOne';
import ScrollTop from '../common/ScrollTop';
import ScrollToTop from '../common/ScrollToTop';
import CustomCursor from '../common/CustomCursor';

export default function About() {
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
            <Breadcrumb title="Nice to meet you!" />
            <ResumeArea />
            <LifePhotoReel /> {/* ✅ Life photo reel section */}
            <SkillArea />
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
