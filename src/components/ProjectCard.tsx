import { ProjectsStructure } from "../data/projects";

interface Props {
  project: ProjectsStructure;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <img src={project.imgURL} alt={`Image representing ${project.name}`} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
