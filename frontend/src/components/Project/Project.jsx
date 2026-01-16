import './Project.css'
import { Link } from "react-router-dom";
import { project_list } from '../Data/project';
const Project = ({ project }) => {
  // if (!project) return null;

  return (
    <div className="project-section">
    <div className="container">
      <h2>Latest Projects</h2>
      <div className="project-section">
        {project_list.map((project) => (
          <div key={project.id} className="card project_card">
            <img src={project.img_src} alt={project.title} />

            <div className="project-body text-dark">
              <Link to={`/project/${project.id}`}>
                <h5>{project.title}</h5>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Project;

   
  
