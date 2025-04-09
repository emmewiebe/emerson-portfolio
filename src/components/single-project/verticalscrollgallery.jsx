import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import img1 from "../../assets/images/hunnys/hunnys1.png";
import img2 from "../../assets/images/hunnys/hunnys2.png";
import img3 from "../../assets/images/hunnys/hunnys3.png";
import img4 from "../../assets/images/hunnys/hunnys4.png";

gsap.registerPlugin(ScrollTrigger);

export default function VerticalScrollGallery() {
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    // Responsive column count
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 600) setColumns(1);
      else if (width < 900) setColumns(2);
      else setColumns(3);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.to(".img", {
      y: -700,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=800 top",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  }, []);

  const galleryImages = [img1, img2, img3, img4, img2, img1, img4, img3, img1];

  const sectionStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "20px",
    padding: "40px 20px",
    height: "auto",
  };

  const imgStyle = (url) => ({
    width: "100%",
    aspectRatio: "1 / 1", // square-ish
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    borderRadius: "12px",
    border: "4px solid white",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
  });

  return (
    <div style={{ width: "100%", overscrollBehavior: "none" }}>
      <div ref={containerRef} style={{ position: "relative" }}>
        <section style={sectionStyle}>
          {galleryImages.map((src, i) => (
            <div key={i} className="img" style={imgStyle(src)}></div>
          ))}
        </section>
      </div>

      {/* Spacer after scroll */}
      <section style={{ height: "100vh" }}></section>
    </div>
  );
}
