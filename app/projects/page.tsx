// import components
import ProjectGallery from "@/ui/project-gallery";

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-center my-8 text-green-500">
            My Work
          </h2>
          <ProjectGallery />
        </div>
      </div>
    </div>
  );
}
