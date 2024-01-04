import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function SkillsChart() {
  return (
    <div className="bottom-0 flex gap-1 -right-5 md:gap-10 md:items-end md:absolute ">
      <div className="flex flex-col gap-10 text-lg md:text-xl">
        <p>
          I am deeply <br /> interested in <br />
          <RoughNotation type="box" show>
            <span className="text-2xl font-semibold">
              Artificial Inteligence
            </span>
          </RoughNotation>
        </p>

        <p>I like video games </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-xl font-semibold">front-end</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-8 h-24 md:w-10 ">
            <h2 className="font-semibold text-black"> 70%</h2>
          </div>
        </RoughNotation>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-xl font-semibold">mobile</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-8 h-24 md:w-10 ">
            <h2 className="font-semibold text-black"> 70%</h2>
          </div>
        </RoughNotation>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-xl font-semibold">animations</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-8 h-20 md:w-10 ">
            <h2 className="font-semibold text-black"> 50%</h2>
          </div>
        </RoughNotation>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 ">
        <p className="text-xl font-semibold">back-end</p>
        <RoughNotation type="box" show>
          <div className="flex items-center justify-center w-8 h-16 md:w-10 ">
            <h2 className="font-semibold text-black"> 40%</h2>
          </div>
        </RoughNotation>
      </div>
    </div>
  );
}
