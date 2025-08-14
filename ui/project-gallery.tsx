// import components
import Project from "./project";
// import project data
import { projects } from "../lib/projects";


export default function ProjectGallery() {
  return (
    <ul id="project-gallery" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto gap-6">
      {projects.map((project, index) => (
        <Project key={index} 
          title={project.title}
          description={project.description}
          // image={project.image}
          technologies={project.technologies}
          url={project.url}
          gitHubRepo={project.gitHubRepo}
          role={Array.isArray(project.role) ? project.role : [project.role]}
          images={project.images ?? { mobile: [], desktop: [] }}
        />
      ))}
    </ul>
  );
}