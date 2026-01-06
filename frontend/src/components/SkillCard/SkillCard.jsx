import { skill_list } from "../Data/skill";
import "./SkillCard.css";

function SkillCard() {
  return (
    <section id="skills" className="bg-dark py-2">
      <div className="container ">
        <h2 className="text-center mb-4 "style={{
          color:"white"
        }}>Technical Arsenal</h2>

        <div className="row">
          {skill_list.map((skill) => (
            <div
              key={skill.name}
              className="col-md-4 col-6 mb-4"
            >
              <div className="card skill-card h-100 shadow-sm">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="card-img-top skill-img"
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">{skill.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillCard;

