import { ProjectsStructure } from "../data/projects";

interface Props {
  project: ProjectsStructure;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-50">{project.name}</h3>
      <p className="text-lg text-blue-100 font-semibold">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
