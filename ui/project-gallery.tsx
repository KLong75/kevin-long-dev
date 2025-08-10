// import components
import Project from "./project";
// import project data
import { projects } from "../lib/projects";


export default function ProjectGallery() {
  return (
    <div className="project-gallery">
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
    </div>
  );
}