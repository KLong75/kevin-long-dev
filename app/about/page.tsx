// import from next
import { connection } from "next/server";
// import data
import { education } from "@/lib/education";
import { experience } from "@/lib/experience";
import { technicalSkills } from "@/lib/technical-skills";
// import components
import TechBadge from "@/ui/tech-badge";
import DownloadResume from "@/ui/download-resume";
import GitHubContributionGrid from "@/ui/github-contribution-grid";
// import GitHubCalendar from "react-github-calendar";
// import { Tooltip as MuiTooltip } from '@mui/material'

export const metadata = {
  title: "Kevin Long | About",
  description: "About page for Kevin Long, a full stack developer.",
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  // const today = new Date().toISOString();
  // const todayFormatted = new Intl.DateTimeFormat("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // }).format(new Date());
  // const oneYearAgo = new Date();
  // oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  // const oneYearAgoFormatted = new Intl.DateTimeFormat("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // }).format(oneYearAgo);
  
  await connection();

  return (
    <div className="flex flex-col flex-1 items-center text-green-500">
      <div className="w-full max-w-7xl mt-12 lg:mt-18 3xl:mt-24">
        <h2 className="text-shadow-black-background-black text-3xl 3xl:text-4xl font-bold text-center mt-8">
          About Me
        </h2>
        <div className="flex justify-center w-full mt-6">
          <p className="text-shadow-black-background-black w-200 md:text-lg text-center text-balance px-6 md:px-0">
            With a background in the performing arts and education, I bring the
            passion and creativity of an artist, along with the patient
            persistence of a teacher, to my work as a developer.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full mt-6">
        <DownloadResume />
      </div>
      <div className="w-full max-w-7xl mt-6">
        <h3 className="text-shadow-black-background-black text-2xl 3xl:text-3xl font-bold text-center">
          Education
        </h3>
        <ul className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {education.map((edu) => (
            <li
              key={edu.institution}
              className="font-share-tech-mono text-white text-shadow-black-background-black m-2 text-center rounded-2xl p-4 shadow-lg shadow-green-500/50 border-2 border-green-500">
              <h4 className="text-xl mb-2">{edu.degree}</h4>
              <p className="text-lg mb-1">{edu.institution}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-7xl mt-6">
        <h3 className="text-shadow-black-background-black text-2xl 3xl:text-3xl font-bold text-center">
          Experience
        </h3>
        <ul className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {experience.map((job) => (
            <li
              key={job.company}
              className="font-share-tech-mono text-white text-shadow-black-background-black m-2 text-center rounded-2xl p-4 shadow-lg shadow-green-500/50 border-2 border-green-500">
              <h4 className="text-xl mb-2">{job.role}</h4>
              <p className="text-lg mb-1">{job.company}</p>
              <p className="italic mb-2">{job.duration}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[90vw]">
        <GitHubContributionGrid />
      </div>
      <div className="w-full max-w-7xl mt-6">
        <h3 className="text-shadow-black-background-black text-2xl 3xl:text-3xl font-bold text-center">
          Technical Skills
        </h3>
        <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
