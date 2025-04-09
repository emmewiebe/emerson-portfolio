import { useEffect } from 'react';

import partner1 from '../../assets/images/client-logos/partner1.png';
import partner2 from '../../assets/images/client-logos/partner2.png';
import partner3 from '../../assets/images/client-logos/partner3.png';
import partner4 from '../../assets/images/client-logos/partner4.png';
import partner5 from '../../assets/images/client-logos/partner5.png';

export default function BrandArea() {
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll('.scroller');
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');
        const scrollerInner = scroller.querySelector('.scroller__inner');
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div
        className="company-design-area"
        style={{
          paddingTop: '40px',
          paddingBottom: '10px',
          marginBottom: '0',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 style={{ marginBottom: '20px' }}>Company I Worked With</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    <img src={partner1} alt="Company" />
                    <img src={partner2} alt="Company" />
                    <img src={partner3} alt="Company" />
                    <img src={partner4} alt="Company" />
                    <img src={partner5} alt="Company" />
                    <img src={partner1} alt="Company" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
