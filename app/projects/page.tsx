// import from next
import { connection } from "next/server";
// import components
import ProjectGallery from "@/ui/project-gallery";
// import from utils
import { delayPageLoad } from "@/utils/utils";

export default async function ProjectsPage() {
  await connection();
  await delayPageLoad(6000);
  return (
      <div className="flex flex-1">
        <div className="w-full">
          <h2 className="text-2xl lg:text-4xl font-bold text-center my-8 text-green-500 text-shadow-black-background-black">
            My Work
          </h2>
          <div className="w-full ">
            <ProjectGallery />
          </div>
        </div>
      </div>
  );
}
