// import components
import MobileImageCarousel from "./mobile-image-carousel";
import DesktopImageCarousel from "./desktop-image-carousel";
// import clsx
import clsx from "clsx";
interface ProjectProps {
  title: string;
  type: string;
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
  guestCredentials?: {
    email: string;
    password: string;
  };
}

export default function Project({
  title,
  type,
  description,
  technologies,
  role,
  url,
  gitHubRepo,
  images,
  guestCredentials,
}: ProjectProps) {
  return (
    <li className="flex flex-col justify-between h-full min-h-[500px] shadow-md shadow-green-500/50 border-2 border-zinc-900 rounded-2xl p-2">
      <div className="flex-1 flex flex-col">
        <h3 className="my-4 text-2xl font-bold text-shadow-black-background-black text-center">
          {title}
        </h3>
        <h4 className="font-bold text-shadow-black-background-black text-center">
          {type}
        </h4>
        <div className="mt-10 sm:mb-6 2xl:my-12">
          <figure className="w-full h-auto">
            <figcaption className="sr-only text-shadow-black-background-black text-center font-bold text-xs lg:text-sm mb-2">
              Mobile
            </figcaption>
            <MobileImageCarousel slides={images.mobile} />
          </figure>
        </div>
        <div className="flex items-center justify-center my-8">
          <figure className="w-full h-auto px-4">
            <figcaption className="sr-only text-shadow-black-background-black text-center font-bold text-xs lg:text-sm mb-2">
              Desktop
            </figcaption>
            <DesktopImageCarousel slides={images.desktop} />
          </figure>
        </div>
        <div className="text-shadow-black-background-black px-2 ">
          <h4 className="font-bold text-xl text-center mb-6">Description:</h4>
          <p className="font-share-tech-mono text-white px-4 py-3 rounded-2xl border-4 border-zinc-900 shadow-md shadow-zinc-200/50 bg-neutral-800 h-40 overflow-y-auto custom-scrollbar">
            {description}
          </p>
        </div>
        <div className="h-120 xl:h-96 2xl:h-80">
          <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <h4 className="text-shadow-black-background-black font-bold text-lg text-center col-span-2 sm:col-span-3 md:col-span-2 xl:col-span-3 2xl:col-span-4 m-6">
              Technologies Used:
            </h4>
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="font-share-tech-mono text-shadow-black-thin font-bold m-2 border-4 border-zinc-900 shadow-md shadow-zinc-200/50 text-center rounded-2xl text-white bg-green-500 p-1 text-sm ">
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
        </div>

        <div className="p-4">
          <h5 className="text-shadow-black-background-black font-bold text-lg text-center col-span-1 md:col-span-2 2xl:col-span-3 mb-2">
            Role:
          </h5>
          <p className="font-share-tech-mono text-shadow-black-background-black font-bold text-lg text-center col-span-1 md:col-span-2 2xl:col-span-3">
            {role.join(", ")}
          </p>
        </div>
      </div>
      <div className="text-green-500 text-lg md:text-xl flex flex-col space-y-4 justify-center my-6">
        <div>
          <a
            href={gitHubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center project-link">
            <span
              className={clsx(
                "tracking-widest lg:hover:text-white transition-colors duration-600 ease-in-out",
                "text-shadow-black-background-black",
                "group-hover:text-shadow-green-background-black"
              )}>
              GitHub Repo
            </span>
            <span className="absolute bottom-[-.25rem] left-0 w-0 h-[2px] bg-green-500 transition-all ease-in-out duration-600 group-hover:w-full"></span>
          </a>
        </div>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center project-link">
            <span
              className={clsx(
                "tracking-widest lg:hover:text-white transition-colors duration-600 ease-in-out",
                "text-shadow-black-background-black",
                "group-hover:text-shadow-green-background-black"
              )}>
              View Project
            </span>
            <span className="absolute bottom-[-.25rem] left-0 w-0 h-[2px] bg-green-500 transition-all ease-in-out duration-600 group-hover:w-full"></span>
          </a>
        </div>
        {guestCredentials && (
          <div className="flex flex-col text-white text-sm">
            <h5 className="text-shadow-black-background-black font-bold text-center mb-2">
              Guest Credentials:
            </h5>
            <p className="text-shadow-black-background-black font-bold text-center ">
              email: {guestCredentials?.email}
            </p>
            <p className="text-shadow-black-background-black font-bold text-center ">
              password: {guestCredentials?.password}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}
