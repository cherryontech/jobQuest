import React from "react";
import { Image } from "@nextui-org/react";
import mascot from "../../assets/finalHomepage.png";
import tcard from "./TaskCard.json";
import TCard from "./Card";

export default function TaskCard() {
  return (
    <div>
      <div
        className="flex flex-row justify-center items-center w-4/5 m-auto"
        style={{ justifyContent: "center" }}
      >
        <div className="w-3/5">
          <p
            className="text-5xl w-3/4 m-auto font-bold"
            style={{ color: "#FF6667" }}
          >
            You only get one shot at a first impression, so make it count!
          </p>
        </div>
        <div className="w-2/5">
          <Image src={mascot} />
        </div>
      </div>
      <div className="p-10" style={{ backgroundColor: "#D9E2F3" }}>
        <div className="w-4/5 m-auto px-20">
          {/* TODO: need to dynamically render path */}
          <p className="text-gray-700 opacity-50 mb-10">
            <span className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer">
              Home
            </span>{" "}
            /{" "}
            <span className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer">
              Linear Path
            </span>
          </p>
          <br />
          <h1 className="text-4xl font-bold mb-1" style={{ color: "#2C2C2C" }}>
            LinkedIn Profile
          </h1>
          <p className="mb-10" style={{ fontSize: "120%" }}>
            Tick off as you complete the tasks. Click on the task to get more
            details and tips!
          </p>
        </div>

        <div
          className="w-5/6 m-auto bg-white p-2"
          style={{ borderRadius: "30px" }}
        >
          {tcard.Linkedin.map((subCard, index) => (
            <TCard subCard={subCard} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
