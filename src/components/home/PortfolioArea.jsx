import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import portfolio_img_1 from "../../assets/images/projects/work1.gif";
import portfolio_img_2 from "../../assets/images/projects/work2.jpg";
import portfolio_img_3 from "../../assets/images/projects/work3.jpg";
import portfolio_img_4 from "../../assets/images/projects/work4.jpg";
import portfolio_img_5 from "../../assets/images/projects/work5.jpg";
import custom_icon from "../../assets/images/custom/work-scribble.svg";

const portfolio_data = [
  {
    route: "first",
    col: "6",
    image: portfolio_img_1,
    title: "Hunny's Bread Lab",
    category: "Branding & Social Media",
  },
  {
    route: "second",
    col: "6",
    image: portfolio_img_2,
    title: "Cove Coffee",
    category: "Brand Design",
  },
  {
    route: "third",
    col: "4",
    image: portfolio_img_3,
    title: "Havenmade Essentials",
    category: "Brand Design",
  },
  {
    route: "fourth",
    col: "4",
    image: portfolio_img_4,
    title: "Olla Icecream",
    category: "Brand Design",
  },
  {
    route: "fifth",
    col: "4",
    image: portfolio_img_5,
    title: "Eken",
    category: "Brand Design",
  },
];

export default function PortfolioArea() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="projects-area"
      id="portfolio"
      style={{
        marginTop: "-40px",
        paddingTop: "0px",
      }}
    >
      <div className="custom-icon" style={{ marginBottom: "10px" }}>
        <img src={custom_icon} alt="custom" />
      </div>

      <div
        className="container text-center"
        style={{
          marginTop: "0px",
          paddingTop: "0px",
          marginBottom: "10px",
        }}
      >
        <h2 className="fw-bold" style={{ marginBottom: "10px" }}>
          MY LATEST WORK
        </h2>
      </div>

      <div className="container-fluid">
        <div className="row g-4 portfolio-grid">
          {portfolio_data.map((item, i) => (
            <div
              key={i}
              className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <Link
                to={`/project/${item.route}`}
                className="work-popup"
                style={{ cursor: "pointer" }}
              >
                <div className="portfolio-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ height: "auto" }}
                    data-rjs="2"
                  />
                  <span className="portfolio-category">{item.category}</span>
                  <div className="portfolio-caption">
                    <h1>{item.title}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
