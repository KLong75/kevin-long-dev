// import from next
import { connection } from "next/server";
// import components
import ProjectGallery from "@/ui/project-gallery";

export default async function ProjectsPage() {
  await connection();
  return (
      <div className="flex flex-1 items-center justify-center text-shadow-black-background-black">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-center my-8 text-green-500">
            My Work
          </h2>
          <div className="mx-auto max-w-600">
            <ProjectGallery />
          </div>
        </div>
      </div>
  );
}
