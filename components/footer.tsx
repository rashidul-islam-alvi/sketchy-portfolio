import React from "react";
import Header from "./header";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      id="contact"
      className="lg:h-[350px] h-fit bg-graph flex py-10 lg:py-0  justify-center items-center mt-20 "
    >
      <div className="w-[70%] h-full flex items-center  justify-around flex-col">
        <Header title="Hire Me" color="#178f89" />
        <div className="flex flex-col justify-between gap-20 text-xl lg:text-4xl lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-4xl lg:text-5xl">Whatsapp</h2>
            <p className="font-bold">01760709684</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-4xl lg:text-5xl">Email</h2>
            <p className="font-bold">rashidul537@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-4xl lg:text-5xl">Github</h2>
            <Link href="https://github.com/rashidul-islam-alvi" target="_blank">
              <p className="font-bold">/rashidul-islam-alvi</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
