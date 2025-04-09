import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img_6 from "../../assets/images/about/about1.png";
import img_7 from "../../assets/images/about/about2.png";
import img_8 from "../../assets/images/about/about3.png";
import img_9 from "../../assets/images/about/about4.png";

const ResumeArea = () => {
  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="resume-section bg-white py-5 position-relative" id="resume">
        <div className="scroll-circle position-fixed bottom-0 start-50 translate-middle-x z-3">
          <motion.div
            style={{ rotate: rotation }}
            className="scroll-rotate-circle border border-dark rounded-circle d-flex align-items-center justify-content-center"
          >
            <p className="scroll-text text-dark m-0">SCROLL * SCROLL</p>
          </motion.div>
        </div>

        <div className="container py-5 position-relative">
          <div className="d-flex flex-column gap-5 position-relative z-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="row align-items-center"
            >
              <div className="col-md-5 text-center">
                <img src={img_6} alt="About 1" className="img-fluid rounded shadow" style={{ maxHeight: '420px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-6 ps-md-5">
                <h2 style={{ fontSize: '2.0rem', color: '#345363', fontFamily: 'Oswald, sans-serif' }}>HI, I'M EMERSON!</h2>
                <p className="text-muted" style={{ fontSize: '1.5rem' }}>
                  I specialize in brand strategy and digital marketing, helping clients create authentic and impactful brand identities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="row align-items-center flex-row-reverse"
            >
              <div className="col-md-5 text-center">
                <img src={img_7} alt="About 2" className="img-fluid rounded shadow" style={{ maxHeight: '420px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-6 pe-md-5 text-end">
                <h2 style={{ fontSize: '2.0rem', color: '#345363', fontFamily: 'Oswald, sans-serif' }}>WHAT DO I BRING TO THE TABLE?</h2>
                <p className="text-muted" style={{ fontSize: '1.5rem' }}>
                  Creative energy, strong visual storytelling, and years of experience in branding, motion graphics, and digital design.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="row align-items-center"
            >
              <div className="col-md-5 text-center">
                <img src={img_9} alt="About 4" className="img-fluid rounded shadow" style={{ maxHeight: '420px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-6 ps-md-5">
                <h2 style={{ fontSize: '2.0rem', color: '#345363', fontFamily: 'Oswald, sans-serif' }}>MY MISSION</h2>
                <p className="text-muted" style={{ fontSize: '1.5rem' }}>
                  Always on the lookout for fresh inspiration and meaningful connection through visual storytelling.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="row align-items-center flex-row-reverse"
            >
              <div className="col-md-5 text-center">
                <img src={img_8} alt="About 3" className="img-fluid rounded shadow" style={{ maxHeight: '420px', objectFit: 'cover' }} />
              </div>
              <div className="col-md-6 pe-md-5 text-end">
                <h2 style={{ fontSize: '2.0rem', color: '#345363', fontFamily: 'Oswald, sans-serif' }}>JUST FOR FUN!</h2>
                <p className="text-muted" style={{ fontSize: '1.5rem' }}>
                  Outside of work, I’m usually hiking, snapping film photos, traveling, or petting every dog I meet.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .scroll-rotate-circle {
          width: 64px;
          height: 64px;
          border-width: 2px;
          position: relative;
        }
        .scroll-text {
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 1px;
          white-space: nowrap;
          transform: rotate(-90deg);
          position: absolute;
        }
        .resume-section {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default ResumeArea;
