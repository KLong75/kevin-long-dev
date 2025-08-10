import Image from "next/image";

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
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
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
      <div className="images">
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
      </div>
    </div>
  );
}
