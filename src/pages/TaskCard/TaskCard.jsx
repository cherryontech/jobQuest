import React from "react";
import {
  Card,
  Image,
  CardHeader,
  CardBody,
  Checkbox,
  Divider,
  Button,
} from "@nextui-org/react";
import mascot from "../../assets/finalHomepage.png";
import tcard from "./TaskCard.json";

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
          <p className="text-gray-700 opacity-50 mb-10">Home / Linear</p>
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
            <div key={index} className="flex justify-around m-5">
              <Checkbox size="lg" color="danger" className="w-1/6" />

              <Card className="w-5/6">
                <CardHeader className="flex gap-3">
                  <p className="text-md font-bold">{subCard.title}</p>
                </CardHeader>
                <Divider />
                <CardBody>
                  {subCard.description.map((desc, descIndex) => (
                    <div key={descIndex}>
                      <p>{desc}</p>
                      {descIndex !== subCard.description.length - 1 && <br />}
                    </div>
                  ))}
                  <br />
                  {subCard.button && (
                    <Button className="bg-[#FF6667] text-white w-1/6">
                      {subCard.button}
                    </Button>
                  )}
                </CardBody>

                <Divider />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
