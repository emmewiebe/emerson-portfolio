import { useState } from 'react';
import ImagePopup from '../../modals/ImagePopup';

import img_1 from '../../assets/images/projects/work1.gif';
import img_2 from '../../assets/images/projects/work2.jpg';
import img_3 from '../../assets/images/projects/work3.jpg';
import img_4 from '../../assets/images/projects/work4.jpg';

const portfolio_images = [
  { id: 1, image: img_1 },
  { id: 2, image: img_2 },
  { id: 3, image: img_3 },
  { id: 4, image: img_4 },
];

export default function SecondProject() {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const image = portfolio_images.map((item) => item.image);

  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src={img_2} alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info"><p>Year</p><h3>2024</h3></div>
                <div className="single-info"><p>Client</p><h3>Client Name</h3></div>
                <div className="single-info"><p>Services</p><h3>Web Design</h3></div>
                <div className="single-info"><p>Project</p><h3>Creative</h3></div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                <p>This is the description for Project 2. You can update this later with real info.</p>
                <p>It currently uses the same layout and images as all other projects.</p>
              </div>
            </div>
          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6" key={item.id}>
                <a onClick={() => handleImagePopup(i)} className="work-popup" style={{ cursor: "pointer" }}>
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <img src={item.image} alt="gallery" />
                  </div>
                </a>
              </div>
            ))}
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
    </>
  );
}
