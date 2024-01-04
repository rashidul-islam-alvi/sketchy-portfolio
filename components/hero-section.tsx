import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center my-10 md:flex-row">
      <div className="flex-auto mb-10 md:mb-0 md:w-1/3 ">
        <div className="md:w-[350px] -z-20 relative  aspect-square rounded-full ">
          <RoughNotation type="circle" show>
            <div className="md:w-[350px] w-[250px] -z-20 relative aspect-square rounded-full ">
              <Image
                src={"/profile.jpg"}
                alt="profile_portrait"
                layout="fill"
                className="absolute rounded-full"
                loading="lazy"
              />
            </div>
          </RoughNotation>
        </div>
      </div>
      <div className="flex flex-col flex-auto md:px-10 md:w-2/3 -z-20">
        <div className="flex flex-col items-center gap-5 md:items-start ">
          <h2 className="text-4xl md:text-7xl">Md. Rashidul Islam</h2>
          <p className="text-2xl md:text-3xl">Cantonment, Dhaka, Bangladesh</p>
          <ul className="flex items-center gap-20 text-2xl md:text-3xl ">
            <li>
              <span className="text-3xl font-semibold md:text-5xl">10+</span>{" "}
              projects
            </li>
            <li>
              <span className="text-3xl font-semibold md:text-5xl">1+</span>{" "}
              experience
            </li>
          </ul>
          <div className="flex gap-10">
            <Button
              size={"lg"}
              variant={"link"}
              className="text-2xl border-2 border-black cursor-pointer md:text-4xl bg-graph"
            >
              Follow
            </Button>

            <Button
              size={"lg"}
              variant={"link"}
              className="text-2xl border-2 border-black md:text-4xl bg-graph"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
