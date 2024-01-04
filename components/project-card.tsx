import React from "react";
import ImageComponent from "./custom-image-component";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  imageUrl: string;
  technologyUsed: string[];
  github: string;
  liveUrl: string;
}

interface ProjectCardProps {
  item: Project;
}

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col w-full h-full gap-5 duration-500 ease-in-out">
      <ImageComponent
        path={item.imageUrl}
        alt={item.imageUrl}
        className="block w-full h-[250px] md:hidden"
      />

      <div className="relative px-5">
        <h2 className="text-2xl font-bold md:text-6xl">
          {item.id}. {item.name}
        </h2>
        <div className="flex flex-wrap gap-5 my-5 md:my-0 md:mt-5">
          {item.technologyUsed.map((t, i) => (
            <RoughNotation key={i} type="highlight" show color="#9C93C9">
              <p className="text-2xl font-semibold">{t}</p>
            </RoughNotation>
          ))}
        </div>
        <div className="flex justify-end gap-10 p-5 md:right-0 md:top-0 md:absolute ">
          <Link href={item.github} target="_blank">
            <RoughNotation type="box" padding={10} show>
              <p className="text-2xl font-bold md:text-3xl">github</p>
            </RoughNotation>{" "}
          </Link>
          <Link href={item.liveUrl} target="_blank">
            <RoughNotation type="box" padding={10} show>
              <p className="text-2xl font-bold md:text-3xl">live url</p>
            </RoughNotation>
          </Link>
        </div>
      </div>
    </div>
  );
}