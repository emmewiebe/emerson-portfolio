import { useEffect } from 'react';
import img_1 from "../../assets/images/lifelately/1.png";
import img_2 from "../../assets/images/lifelately/2.png";
import img_3 from "../../assets/images/lifelately/3.png";
import img_4 from "../../assets/images/lifelately/4.png";
import img_5 from "../../assets/images/lifelately/5.png";
import img_6 from "../../assets/images/lifelately/6.png";

export default function LifePhotoReel() {
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
        <section className="life-reel-area py-5">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#345363', fontFamily: 'Oswald, sans-serif' }}>
                    A GLIMPSE INTO MY LIFE
                </h2>
                <div className="scroller" data-direction="left" data-speed="slow">
                    <div className="scroller__inner d-flex align-items-center gap-4">
                        <img src={img_1} alt="Life 1" />
                        <img src={img_2} alt="Life 2" />
                        <img src={img_3} alt="Life 3" />
                        <img src={img_4} alt="Life 4" />
                        <img src={img_5} alt="Life 5" />
                        <img src={img_6} alt="Life 6" />
                    </div>
                </div>
            </div>

            <style>{`
                .life-reel-area img {
                  max-height: 180px;
                  border-radius: 12px;
                  object-fit: cover;
                }
                .scroller {
                  overflow: hidden;
                  position: relative;
                  width: 100%;
                }
                .scroller__inner {
                  display: flex;
                  width: max-content;
                  animation: scroll-left 30s linear infinite;
                }
                @keyframes scroll-left {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
