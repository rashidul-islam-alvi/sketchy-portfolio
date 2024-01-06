"use client";

import React, { useState } from "react";
import Header from "./header";
import ProjectCard from "./project-card";
import ImageComponent from "./custom-image-component";
import { RoughNotation } from "react-rough-notation";
import { projects } from "@/data";
import { Button } from "./ui/button";
import Link from "next/link";

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
        <ul className="grid gap-10 lg:grid-cols-2 ">
          {projects.map((item, index) => (
            <RoughNotation type="box" show key={item.id}>
              <div
                className="relative cursor-pointer h-fit"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <ProjectCard item={item} />
              </div>
            </RoughNotation>
          ))}
        </ul>

        <div className="flex justify-center mt-10">
          <Link href="https://github.com/rashidul-islam-alvi" target="_blank">
            <Button
              variant={"link"}
              size={"lg"}
              className="text-3xl border-2 border-gray-500 "
            >
              See all projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
