
import "./Education.css";
import { education_list } from "../../components/Data/education";

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-container">
        {education_list.map((item) => (
          <div className="education-card" key={item.id}>
            <div className="icon">📖</div>
            <h3>{item.college}</h3>
            <p>{item.course}</p>
            <span>{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
