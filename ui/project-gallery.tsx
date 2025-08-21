// import components
import Project from "./project";
// import project data
import { projects } from "../lib/projects";

export default function ProjectGallery() {
  
  return (
    <div className="max-w-500 mx-auto">
    <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-12 p-8 sm:p-12 w-full">
      {projects.map((project, index) => (
        <Project key={index} 
          title={project.title}
          type={project.type}
          description={project.description}
          // image={project.image}
          technologies={project.technologies}
          url={project.url}
          gitHubRepo={project.gitHubRepo}
          role={Array.isArray(project.role) ? project.role : [project.role]}
          images={project.images ?? { mobile: [], desktop: [] }}
          guestCredentials={project.guestCredentials} // Pass guest credentials if available
        />
      ))}
    </ul>
    </div>
  );
}