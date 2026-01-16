import { Link, useParams } from "react-router-dom";
import { project_list } from "../../components/Data/project";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = project_list.find((project) => project.id == id);

  if (!project) {
    return <h2>Project Not Found </h2>;
  }

  return (
    <>
      <div className="project-container">
        {/* Project Content */}
        <div className="project-content">
          <h3>{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          {project.features && (
            <>
              <h2>Features :</h2>
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          {project.tools && (
            <>
              <h2>Tools / Technologies :</h2>
              <ul className="project-tools">
                {project.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </>
  );
}
export default ProjectDetail;
