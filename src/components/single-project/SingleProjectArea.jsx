import { useState } from 'react';
import ImagePopup from '../../modals/ImagePopup';
import SingleProjectLayout from './SingleProjectLayout';
import HorizontalScrollGallery from './HorizontalScrollGallery';

import heroImg from '../../assets/images/hunnys/hunnyswindowsign.png';
import img1 from '../../assets/images/hunnys/hunnys8.png';
import img2 from '../../assets/images/hunnys/hunnys7.png';
import img3 from '../../assets/images/hunnys/hunnys5.png';
import img4 from '../../assets/images/hunnys/hunnys6.gif';

export default function FirstProject() {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const image = [heroImg];

  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  return (
    <SingleProjectLayout
      title="Hunny's Bread Lab"
      customDescription="A cozy brand identity and social media experience created for a local sourdough bakery. Fresh visuals, warm vibes, and an authentic community-first feel."
    >
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img
            src={heroImg}
            alt="Hunny's Bread Lab Hero"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '800px',
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info"><p>Year</p><h3>2025</h3></div>
                <div className="single-info"><p>Client</p><h3>Hunny's Bread Lab</h3></div>
                <div className="single-info"><p>Services</p><h3>Branding & Social Media Direction</h3></div>
                <div className="single-info"><p>Project</p><h3>Creative</h3></div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam,
                  purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna,
                  porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                  piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HorizontalScrollGallery />

      <div className="container pt-80 pb-80">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <img
                src={img1}
                alt="Grid 1"
                className="img-fluid w-100 h-100 object-fit-cover rounded"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <img
                src={img2}
                alt="Grid 2"
                className="img-fluid w-100 h-100 object-fit-cover rounded"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <img
                src={img3}
                alt="Grid 3"
                className="img-fluid w-100 h-100 object-fit-cover rounded"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div style={{ height: '300px', overflow: 'hidden' }}>
              <img
                src={img4}
                alt="Grid 4"
                className="img-fluid w-100 h-100 object-fit-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </SingleProjectLayout>
  );
}
