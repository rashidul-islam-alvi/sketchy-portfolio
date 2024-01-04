"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "./header";
import ProjectCard from "./project-card";
import ImageComponent from "./custom-image-component";
import { RoughNotation } from "react-rough-notation";
import { projects } from "@/data";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(NaN);
  };

  return (
    <div id="projects">
      <div className="mb-20">
        <Header title="Projects" color="#ee4141" />
      </div>
      <div>
        <ul className="flex flex-col gap-10 ">
          {projects.map((item, index) => (
            <RoughNotation type="box" show key={item.id}>
              <div
                className="relative py-0 cursor-pointer h-[450px] md:h-fit md:py-5 "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`${
                    hoveredProject === index
                      ? "w-[450px] h-[300px] border-2 left-1/3 z-10  absolute"
                      : "hidden"
                  } ${
                    hoveredProject! >= 3 ? "bottom-10" : "-top-10"
                  } hidden lg:block `}
                >
                  <ImageComponent
                    path={item.imageUrl}
                    alt={item.imageUrl}
                    className="w-full h-full"
                  />
                </div>

                <ProjectCard item={item} />
              </div>
            </RoughNotation>
          ))}
        </ul>
      </div>
    </div>
  );
}
