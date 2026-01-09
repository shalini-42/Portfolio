import { Link, useParams } from "react-router-dom";
import { project_list } from "../../components/Data/project";

function ProjectDetail(){
    const {id} = useParams();
    const project = project_list.find((project) => project.id == id)

    if(!project){
        return <h2>Project Not Found </h2>
    }

    return(
        <>
        Prject: {project.title}
        </>
    )
}
export default ProjectDetail;