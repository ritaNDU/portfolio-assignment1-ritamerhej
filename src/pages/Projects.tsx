import PageHeading from "../components/PageHeading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="pages-common-style gap-9 h-full">
      <PageHeading
        title="Projects"
        className="text-3xl text-blue-950 font-bold"
      />

      <div className="w-screen h-full bg-blue-400 p-6 grid grid-cols-1 gap-10 md:gap-15 lg:md:grid-cols-2 lg:gap-10">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
