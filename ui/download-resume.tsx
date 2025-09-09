import { RiDownload2Fill } from "react-icons/ri";
import clsx from "clsx";

export default function DownloadResume() {
  return (
    <a
      href="/resume/kevin-long-resume-full-stack-developer.pdf"
      download
      className="relative group flex flex-col my-6">
      <div className="icon-shadow tracking-widest lg:hover:text-white transition-colors duration-700 ease-in-out flex flex-col items-center">
        <RiDownload2Fill size={24} className="" />
        <span className="text-xl">Download Resume</span>
      </div>
      <span className="absolute bottom-[-.25rem] left-0 w-0 h-[2px] bg-green-500 transition-all ease-in-out duration-700 group-hover:w-full"></span>
    </a>
  );
}
