import React from "react";
import { RoughNotation } from "react-rough-notation";

export default function TerminalInfo() {
  const text = "---->";
  return (
    <div>
      <RoughNotation type="box" show>
        <div className="flex flex-col mt-20 rounded-sm ">
          <RoughNotation type="box" show>
            <div className="flex gap-2 px-5 py-4 md:px-10 h-1/6 ">
              <div className="h-5 w-5 border-[#2f9e44] border-2 bg-[#b2f2bb] rounded-full" />
              <div className="h-5 w-5 border-[#1971c2] border-2 bg-[#a5d8ff] rounded-full" />
              <div className="h-5 w-5 border-[#e03131] border-2 bg-[#ffc9c9] rounded-full" />
            </div>
          </RoughNotation>

          <div className="flex flex-col gap-5 px-5 py-10 md:px-10 h-5/6 ">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold md:text-4xl ">
                {text} about.me
              </h2>
              <p className="text-xl italic md:text-2xl">
                I am a front-end engineer with JavaScript frameworks
                problem-solving skills and proven experience in creating and
                designing websites in a test-driven environment with clean code.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-2xl font-semibold md:text-4xl ">
                {text} my.education
              </h2>
              <p className="text-xl italic md:text-2xl">
                B.sc in Computer Science & Engineering - Northern University
                Bangladesh
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold md:text-4xl ">
                {text} my.competencies
              </h2>
              <p className="text-xl italic md:text-2xl">
                teamwork, problem-solving, multi-tasking, analytical-thinking ,
                communication , fast-learning
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold md:text-4xl">{text} </h2>
            </div>
          </div>
        </div>
      </RoughNotation>
    </div>
  );
}
