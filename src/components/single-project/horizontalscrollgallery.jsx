import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img_1 from "../../assets/images/hunnys/hunnys1.png";
import img_2 from "../../assets/images/hunnys/hunnys2.png";
import img_3 from "../../assets/images/hunnys/hunnys3.png";
import img_4 from "../../assets/images/hunnys/hunnys4.png";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    { src: img_1 },
    { src: img_3 },
    { src: img_2 },
    { src: img_4 },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "85vh",
        marginTop: "60px", // ↓ reduced from 120px
        overflow: "hidden",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "60px",
          paddingLeft: "120px",
          height: "auto",
          width: "max-content",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "35vw",
              height: "65vh",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              background: "#eee",
            }}
          >
            <img
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <h2
              style={{
                position: "absolute",
                bottom: "16px",
                left: "20px",
                color: "white",
                fontSize: "1.25rem",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            ></h2>
          </div>
        ))}
      </div>
    </section>
  );
}
