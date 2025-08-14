// import components
import MobileImageCarousel from "./mobile-image-carousel";
import DesktopImageCarousel from "./desktop-image-carousel";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
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
    <li className="text-white shadow-lg shadow-gray-200/50 border-2 border-neutral-600 rounded-2xl p-2 text-shadow-black-background-black max-w-400 mx-auto">
      <h2 className="text-lg font-bold text-shadow-black-background-black text-center">
        {title}
      </h2>
      <div className="flex items-center justify-center my-4">
        <figure className="w-full h-auto">
          <figcaption className="text-center font-bold text-xs lg:text-sm mb-2">
            Mobile View
          </figcaption>
          <MobileImageCarousel slides={images.mobile} />
        </figure>
      </div>
      <div className="flex items-center justify-center mt-8">
        <figure className="w-full h-auto px-4">
          <figcaption className="text-center font-bold text-xs lg:text-sm mb-2">
            Desktop View
          </figcaption>
          <DesktopImageCarousel slides={images.desktop} />
        </figure>
      </div>
      <div>
        <p className="p-2">{description}</p>
      </div>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <p>Role: {role.join(", ")}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <a href={gitHubRepo} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
      {/* <div className="images">
        {images.mobile.map((img, index) =>
          img.endsWith(".mp4") ? (
            <video key={index} controls style={{ width: "100%" }}>
              <source src={img} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={index}
              src={img}
              alt={`${title} mobile view`}
              width={1080}
              height={1920}
            />
          )
        )}
        {images.desktop.map((img, index) =>
          img.endsWith(".mp4") ? (
            <video key={index} controls style={{ width: "100%" }}>
              <source src={img} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={index}
              src={img}
              alt={`${title} desktop view`}
              width={1920}
              height={1080}
            />
          )
        )}
      </div> */}
    </li>
  );
}
