import { skill_list } from "../Data/skill";
import "./SkillCard.css";

function SkillCard() {
  return (
      <div className="skills-section">
      <div className="container">
        <h2 className="skills-title">Technical Skills</h2>

        <div className="row justify-content-center">
          {skill_list.map((skill, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
            >
              <div className="skill-card text-center">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="skill-icon"
                />
                <h5>{skill.title}</h5>
                <p>{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
