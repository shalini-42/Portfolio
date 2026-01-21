import Card from "../../components/Card";
import SkillCard from "../../components/SkillCard/SkillCard";
import { skill_list } from "../../components/Data/skill";
import { project_list } from "../../components/Data/project";
import Project from "../../components/Project/Project";
import Education from "../Education/Education";
import { education_list } from "../../components/Data/education";
import About from "../About/About";

function HomePage() {
  
  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", backgroundColor: "black" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <Card />
          </div>
          
        </div>
      </div>
    </>
  );
}
export default HomePage;
