import React from "react";

type SocialLinkProps = {
  href: string;
  svg: React.ReactNode;
  title: string;
};

const SocialLink = ({ href, svg, title }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center bg-zinc-100 px-3 py-1 gap-1.5 rounded-full transition hover:bg-zinc-200 focus:bg-zinc-200 focus:outline-none"
    >
      {svg}
      <span className="text-sm">{title}</span>
    </a>
  );
};

export default SocialLink;
