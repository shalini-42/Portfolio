import Card from "../../components/Card";
import SkillCard from "../../components/SkillCard/SkillCard";
import { skill_list } from "../../components/Data/skill";
import { project_list } from "../../components/Data/project";
import Project from "../../components/Project/Project";


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
          {/* <div className="card-group my-3">
           {skill_list.map((skills, index) =>(
                <SkillCard skills={skills} key={skills.id}/>
  ))
}
        </div> */}
         {/* <div>
      {project_list.map((item) => (
  <Project key={item.id} project={item} />
))}
</div> */}
{/* <div>
      {project_list.map((project, index) => (
  <Project project={project} key={project.id} />
))}
</div> */}
        </div>
      </div>
    </>
  );
}
export default HomePage;
