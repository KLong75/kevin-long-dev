// import components
import MobileImageCarousel from "./mobile-image-carousel";
import DesktopImageCarousel from "./desktop-image-carousel";
// import icons
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

interface ProjectProps {
  title: string;
  description: string;
  technologies: {
    name: string;
    url: string;
  }[];
  role: string[];
  url: string;
  gitHubRepo: string;
  images: {
    mobile: string[];
    desktop: string[];
  };
}

export default function Project({
  title,
  description,
  technologies,
  role,
  url,
  gitHubRepo,
  images,
}: ProjectProps) {
  return (
    <li className="flex flex-col justify-between h-full min-h-[500px] text-green-500 shadow-lg shadow-green-500/50 border-2 border-green-500 rounded-2xl p-2 bg-neutral-800">
      <div className="flex-1 flex flex-col">
        <h3 className="my-4 text-xl lg:text-2xl font-bold text-shadow-black-background-black text-center">
          {title}
        </h3>
        <div className="mt-4">
          <figure className="w-full h-auto">
            <figcaption className="text-shadow-black-background-black text-center font-bold text-xs lg:text-sm mb-2">
              Mobile View
            </figcaption>
            <MobileImageCarousel slides={images.mobile} />
          </figure>
        </div>
        <div className="flex items-center justify-center mt-8">
          <figure className="w-full h-auto px-4">
            <figcaption className="text-shadow-black-background-black text-center font-bold text-xs lg:text-sm mb-2">
              Desktop View
            </figcaption>
            <DesktopImageCarousel slides={images.desktop} />
          </figure>
        </div>
        <div className="text-shadow-black-background-black p-4">
          <h4 className="font-bold text-lg text-center mb-6">
            Project Description:
          </h4>
          <p>{description}</p>
        </div>
        <ul className="p-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
          <h5 className="text-shadow-black-background-black font-bold text-lg text-center col-span-1 md:col-span-2 2xl:col-span-3 mb-6">
            Technologies Used:
          </h5>
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="text-shadow-black-thin m-2 border border-black text-center rounded-2xl text-white bg-green-500 py-1">
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors duration-200">
                {tech.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <h5 className="text-shadow-black-background-black font-bold text-lg text-center col-span-1 md:col-span-2 2xl:col-span-3 mb-2">
            Role:
          </h5>
          <p className="text-shadow-black-background-black font-bold text-lg text-center col-span-1 md:col-span-2 2xl:col-span-3">
            {role.join(", ")}
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-12 my-6">
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center project-link">
            <span className="text-shadow-black-background-black">View Project</span>
            <CgWebsite size={32} className="project-icon" />
          </a>
        </div>
        <div>
          <a
            href={gitHubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center project-link">
            <span className="text-shadow-black-background-black">GitHub Repo</span>
            <FiGithub size={32} className="project-icon" />
          </a>
        </div>
      </div>
    </li>
  );
}
