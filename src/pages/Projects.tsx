import PageHeading from "../components/PageHeading";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <>
      <PageHeading title="Projects" />

      <div className="grid-container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
