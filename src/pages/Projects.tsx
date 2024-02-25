import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="pages-common-style gap-9 h-screen bg-gray-300 overflow-visible">
      <div className="w-screen py-6 justify-items-center grid grid-cols-1 gap-3 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
