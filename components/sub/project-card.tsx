"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className="card3d w-full h-[600px]">
      <div className="inner h-full flex flex-col">
        <div className="relative h-[250px] w-full mb-4">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
          className="flex flex-col flex-grow"
        >
          <h2 className="text-xl font-bold mb-4 text-white sci-fi-font">{title}</h2>
          <p className="text-sm text-purple-200 flex-grow">{description}</p>
        </Link>
      </div>
      <div className="glow-overlay"></div>
    </div>
  );
};
