import { Link } from "react-router-dom";

const Project = ({ project }) => {
  if (!project) return null;

  return (
      <section id="project">
      <div className="card project_card text-dark">
       {ima}

        <div className="card-body">
          <Link to={`/project/${project.id}`}>
            <h5>{project.title}</h5>
          </Link>

          <p>{project.description}</p>
          <small>{project.tech}</small>
          <br />

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Project;
