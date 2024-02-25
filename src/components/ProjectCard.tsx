import { ProjectsStructure } from "../data/projects";

interface Props {
  project: ProjectsStructure;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-white p-3 w-10/12 h-5/6 rounded-xl shadow-md">
      <h3 className="xl:text-2xl text-xl md:text-lg max-sm:text-base font-bold text-black">
        {project.name}
      </h3>
      <p className="text-sm xl:text-lg max-sm:text-sm text-black font-medium ">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
