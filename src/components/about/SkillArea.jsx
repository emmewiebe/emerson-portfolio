import skill1 from "../../assets/images/skills/skill1.png";
import skill2 from "../../assets/images/skills/skill2.png";
import skill3 from "../../assets/images/skills/skill3.png";
import skill4 from "../../assets/images/skills/skill4.png";
import skill5 from "../../assets/images/skills/skill5.png";
import skill6 from "../../assets/images/skills/skill6.png";
import skill7 from "../../assets/images/skills/skill7.png";
import skill8 from "../../assets/images/skills/skill8.png";

export default function SkillArea() {
  return (
    <section id="skills" className="skill-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title mb-40 wow fadeInUp delay-0-2s">
                <h2>A Few Of My Technical Skills</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="skill-items-wrap">
                <div className="row">
                  {[
                    { img: skill1, label: "Adobe Photoshop", delay: "0-2s" },
                    { img: skill2, label: "FIGMA", delay: "0-3s" },
                    { img: skill3, label: "ADOBE ILLUSTRATOR", delay: "0-4s" },
                    { img: skill4, label: "WORDPRESS", delay: "0-5s" },
                    { img: skill5, label: "CANVA", delay: "0-2s" },
                    { img: skill6, label: "HTML + CSS + JS", delay: "0-3s" },
                    { img: skill7, label: "MAILCHIMP", delay: "0-4s" },
                    { img: skill8, label: "KLAVYIO", delay: "0-5s" },
                  ].map((skill, i) => (
                    <div
                      key={i}
                      className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6"
                    >
                      <div className={`skill-item wow fadeInUp delay-${skill.delay}`}>
                        <img src={skill.img} alt={`Skill: ${skill.label}`} />
                        <h5>{skill.label}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
