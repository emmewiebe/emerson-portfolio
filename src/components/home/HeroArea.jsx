import React from 'react';
import heroImg from '../../assets/images/about/me.png';

export default function HeroArea() {
  return (
    <>
      <style>
        {`
          #circle-container {
            margin: 0;
            position: absolute;
            top: 25%;
            right: -15%;
            width: 200px;
            height: 200px;
            overflow: hidden;
          }

          #circle-text {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            font-size: 17px;
            font-weight: light;
            fill: #345363;
          }

          #circle-svg {
            width: 100%;
            height: 100%;
            animation: rotate 20s linear infinite reverse;
          }

          @keyframes rotate {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}
      </style>

      <section
        id="home"
        className="main-hero-area"
        style={{
          backgroundColor: '#F2EEE9',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '100px',
          paddingBottom: '1px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2 style={{ fontSize: '10rem' }}>
                  Emerson Drew
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <div
                className="hero-media-wrapper"
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  marginTop: '50px',
                }}
              >
                <div className="hero-image">
                  <img
                    src={heroImg}
                    alt="Emerson"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>

                <div id="circle-container">
                  <svg id="circle-svg" viewBox="0 0 300 300">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                      />
                    </defs>
                    <text id="circle-text">
                      <textPath xlinkHref="#circlePath" startOffset="0%">
                        S C R O L L • S C R O L L • S C R O L L • S C R O L L • S C R O L L • S C R O L L 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
