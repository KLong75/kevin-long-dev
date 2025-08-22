// import from next
import { connection } from "next/server";
// import components
import ProjectGallery from "@/ui/project-gallery";
// import from utils
// import { delayPageLoad } from "@/utils/utils";

export const metadata = {
  title: "Kevin Long | Portfolio",
  description:
    "Portfolio display of web development projects by Kevin Long, a full stack developer.",
  alternates: {
    canonical: "/projects",
  },
};

export default async function ProjectsPage() {
  await connection();
  // await delayPageLoad(6000);
  return (
      <div className="flex flex-1 justify-center">
        <div className="w-full mt-12 lg:mt-18 3xl:mt-24 max-w-10xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center my-8 text-green-500 text-shadow-black-background-black">
            My Work
          </h2>
          <div className="w-full ">
            <ProjectGallery />
          </div>
        </div>
      </div>
  );
}
