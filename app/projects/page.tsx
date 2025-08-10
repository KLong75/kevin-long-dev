// import components
import ProjectGallery from "@/ui/project-gallery";

export default function ProjectsPage() {
  return (
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-center my-8 text-green-500">
            My Work
          </h2>
          <ProjectGallery />
        </div>
      </div>
  );
}
