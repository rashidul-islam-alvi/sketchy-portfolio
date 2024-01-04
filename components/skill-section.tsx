import React from "react";
import Header from "./header";
import { RoughNotation } from "react-rough-notation";
import SkillsCard from "./skills-card";
import {
  adobesuiteTools,
  backendEndTools,
  frontEndTools,
  mobileTools,
  othersTools,
} from "@/data";
import SkillsChart from "./skills-chart";

export default function Skills() {
  return (
    <div className="px-5 py-20" id="skills">
      <div className="mb-20">
        <Header color="#ffc9c9" title="skills" />
      </div>

      <div className="relative grid grid-cols-1 mt-10 md:grid-cols-2 gap-x-10 gap-y-20">
        <div className="absolute right-0 top-[360px] md:top-1/3">
          <RoughNotation type="underline" show>
            <h2 className="text-4xl md:text-8xl">Web Design</h2>
          </RoughNotation>
        </div>

        <div className="absolute right-0 md:right-[700px]  top-[720px] md:bottom-1/4">
          <RoughNotation type="underline" show>
            <h2 className="text-xl font-bold md:font-normal md:text-5xl">
              Mobile Application Developer
            </h2>
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={frontEndTools} />
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={backendEndTools} />
          </RoughNotation>
        </div>
        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={mobileTools} />
          </RoughNotation>
        </div>
        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={adobesuiteTools} />
          </RoughNotation>
        </div>

        <div>
          <RoughNotation type="bracket" show color="#d33f3f">
            <SkillsCard tools={othersTools} />
          </RoughNotation>
        </div>

        <SkillsChart />
      </div>
    </div>
  );
}
