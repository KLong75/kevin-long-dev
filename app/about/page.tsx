// import from next
// import { connection } from "next/server";
// import data
import { education } from "@/lib/education"
import { experience } from "@/lib/experience"
import { technicalSkills } from "@/lib/technical-skills";
// import components
import TechBadge from "@/ui/tech-badge";

export const metadata = {
  title: "Kevin Long | About",
  description: "About page for Kevin Long, a full stack developer.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  // await connection();
  return (
    <div className="flex flex-col flex-1 items-center text-green-500 text-shadow-black-background-black">
      <div className="w-full max-w-7xl mt-12 lg:mt-18 3xl:mt-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-8">
          About Me
        </h2>
          <div className="flex justify-center w-full mt-6">
            <p className="w-200 md:text-lg text-center text-balance">
              With a background in the performing arts and education, I bring
              the passion and creativity of an artist, along with the patient
              persistence of a teacher, to my work as a developer.
            </p>
          </div>
        </div>
        <div className="w-full max-w-7xl mt-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-center">
            Experience
          </h3>
        </div>
        <div className="w-full max-w-7xl mt-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-center">
            Education
          </h3>
        </div>
        <div className="w-full max-w-7xl mt-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-center">
            Technical Skills
          </h3>
          <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {technicalSkills.map((skill) => (
              <TechBadge
                key={skill.name}
                name={skill.name}
                documentationUrl={skill.documentationUrl}
              />
            ))}
          </ul>
        </div>
    </div>
  );
}
