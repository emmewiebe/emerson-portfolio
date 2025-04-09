import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../../assets/images/hunnys/hunnys1.png";
import img2 from "../../assets/images/hunnys/hunnys2.png";
import img3 from "../../assets/images/hunnys/hunnys3.png";
import img4 from "../../assets/images/hunnys/hunnys4.png";
import img16 from "../../assets/images/hunnys/hunnys16.png";
import video1 from "../../assets/images/hunnys/hunnyscolorpalette.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".reveal-item");
    items.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div style={{ padding: "0 8px" }}>
      <div ref={containerRef} style={wrapperStyle}>
        {/* Section 1: Full-width top image */}
        <div className="reveal-item" style={fullImg}>
          <img src={img16} alt="Showcase 1" style={firstImgStyle} />
        </div>

        {/* Section 2: Two-column image grid */}
        <div className="reveal-item" style={grid2col}>
          <img src={img2} alt="Showcase 2" style={imgStyle} />
          <img src={img3} alt="Showcase 3" style={imgStyle} />
        </div>

        {/* Section 3: Three-column grid with video in last slot */}
        <div className="reveal-item" style={grid3col}>
          <img src={img4} alt="Showcase 4" style={imgStyle} />
          <img src={img2} alt="Showcase 5" style={imgStyle} />
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            style={imgStyle}
          />
        </div>
      </div>
    </div>
  );
}

// Styles
const wrapperStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
};

const fullImg = {
  marginBottom: "20px",
  width: "100%",
};

const firstImgStyle = {
  width: "100%",
  aspectRatio: "16 / 9", 
  maxHeight: "500px",
  objectFit: "cover",
  display: "block",
  borderRadius: 0,
};

const grid2col = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "8px",
  marginBottom: "20px",
};

const grid3col = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
};

const imgStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  objectFit: "cover",
  borderRadius: 0,
};
