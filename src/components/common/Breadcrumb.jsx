// src/components/common/Breadcrumb.jsx
export default function Breadcrumb({ title, style_2, style_3, style_4, customDescription }) {
  return (
    <section className="single-page-hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <h2>{title}</h2>

            {customDescription && <p>{customDescription}</p>}

            {!customDescription && style_2 && (
              <p>
                A Collection of EMMES Latest Works and Achievements: Discover the Projects that Define My Passion and Skills
              </p>
            )}
            {!customDescription && style_3 && (
              <p>
                Fill out the form below to get in touch with me. I am always excited to hear about new opportunities and I will do my best to respond to your inquiry within 24 hours.
              </p>
            )}
            {!customDescription && style_4 && (
              <p>Stories, Advice, and Inspiration for the Curious Mind</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
