import React from "react";

type ProjectCardProps = {
  link: string;
  svg: React.ReactNode;
  title: string;
  description: string;
};

const ProjectCard = ({ link, svg, title, description }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="ring ring-zinc-100 rounded-md p-3 hover:ring-4 transition relative group focus:border-none focus:outline-none focus:ring-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        color="currentColor"
        className="absolute right-3 top-3 text-zinc-300 block md:hidden group-hover:block group-focus:block"
        strokeWidth="1.85"
        stroke="currentColor"
      >
        <path
          d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.85"
        />
        <path
          d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.85"
        />
      </svg>

      <div className="flex items-center gap-1 mb-1.5">
        <div className="-mt-1">{svg}</div>
        <h3>{title}</h3>
      </div>
      <p className="text-zinc-600 text-sm">{description}</p>
    </a>
  );
};

export default ProjectCard;
