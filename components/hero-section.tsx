import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { RoughNotation } from "react-rough-notation";

export default function Hero() {
  return (
    <div className="flex flex-col items-center my-10 lg:flex-row">
      <div className="flex-auto mb-10 lg:mb-0 lg:w-1/3 ">
        <div className="lg:w-[350px] -z-20 relative  aspect-square rounded-full ">
          <RoughNotation type="circle" show>
            <div className="lg:w-[350px] w-[250px] -z-20 relative aspect-square rounded-full ">
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
      <div className="flex flex-col flex-auto md:px-10 lg:w-2/3 -z-20 md:z-0">
        <div className="flex flex-col items-center gap-5 lg:items-start ">
          <h2 className="text-4xl lg:text-7xl">Md. Rashidul Islam</h2>
          <p className="text-2xl lg:text-3xl">Cantonment, Dhaka, Bangladesh</p>
          <ul className="flex items-center gap-20 text-2xl md:text-3xl ">
            <li>
              <span className="text-3xl font-semibold lg:text-5xl">10+</span>{" "}
              projects
            </li>
            <li>
              <span className="text-3xl font-semibold lg:text-5xl">1+</span>{" "}
              experience
            </li>
          </ul>
          <div className="flex gap-10">
            <Button
              size={"lg"}
              variant={"link"}
              className="text-2xl border-2 border-black cursor-pointer lg:text-4xl bg-graph"
            >
              Follow
            </Button>

            <Button
              size={"lg"}
              variant={"link"}
              className="text-2xl border-2 border-black lg:text-4xl bg-graph"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
