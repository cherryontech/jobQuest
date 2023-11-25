import React, { useEffect, useState } from "react";
import { Image, CircularProgress } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";

import Resource from "./Card";

import mascot from "../../assets/finalHomepage.png";

export default function TaskCard() {
  const { task } = useParams();
  const [taskCardData, setTaskCardData] = useState([]);
  const [resource, setResource] = useState({});
  const [value, setValue] = React.useState(0);
  const [resourceColor, setResourceColor] = useState();
  const navigateTo = useNavigate();

  // placeholder
  // percentage of tasks the user has completed
  useEffect(() => {
    let i = 0;
    for (const key in resource) {
      if (resource[key]) {
        i += 1;
      }

      const percent = (i / taskCardData.length) * 100;
      setValue(percent);
    }
  }, [resource, taskCardData]);

  useEffect(() => {
    const fetchResourceInfo = () => {
      let res = JSON.parse(localStorage.getItem(task));
      //on initial render set the key/value pairs of cards in localStorage
      if (!res) {
        res = {};
        localStorage.setItem(task, JSON.stringify(res));
      } else {
        //else grab what's already in localStorage and render
        setResource(res);
      }
    };
    const fetchTaskJsonFile = async () => {
      try {
        const response = (await import(`./${task}.json` /*@vite-ignore*/))
          .default;
        setTaskCardData(response);
      } catch (err) {
        console.log(`error retrieving ${task} json file, ${err}`);
        setTaskCardData([]);
      }
    };

    setResourceColor(
      task === "linkedin"
        ? "danger"
        : task === "resume"
        ? "success"
        : "secondary"
    );

    fetchResourceInfo();
    fetchTaskJsonFile();
  }, [task]);

  return (
    <div>
      <div
        className="flex flex-row justify-center items-center h-screen m-auto w-4/5"
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
          <Image src={mascot} sizes={"md"} />
        </div>
      </div>
      <div className="p-10" style={{ backgroundColor: "#D9E2F3" }}>
        <div className="w-4/5 m-auto px-20">
          {/* TODO: need to dynamically render path */}
          <p className=" text-gray opacity-50 mb-10">
            <span
              className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer"
              onClick={() => navigateTo("/")}
            >
              Home
            </span>{" "}
            /{" "}
            <span
              className="hover:text-[#FF6667] hover:opacity-100 hover:cursor-pointer"
              onClick={() => navigateTo("/roadmap")}
            >
              Linear Path
            </span>
          </p>
          <br />
          {/* TODO: need to dynamically render title of resource */}
          <h1 className="text-4xl font-bold mb-1" style={{ color: "#2C2C2C" }}>
            {task === "linkedin"
              ? "LinkedIn Profile"
              : task === "interview-prep"
              ? "Interview Prep"
              : `${task.charAt(0).toUpperCase()}${task.slice(1)}`}
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
          <div className=" m-5 flex justify-end px-20">
            <CircularProgress
              aria-label="Task Percentage"
              size="lg"
              value={value}
              // color="danger"
              style={{
                color: `${
                  task === "linkedin"
                    ? "#FF6667"
                    : task === "resume"
                    ? "#3E7CD9"
                    : "#36CC96"
                }`,
              }}
              className="font-bold"
              showValueLabel={true}
            />
          </div>
          {/* TODO: Need to dynamically render resource here */}
          {taskCardData.map((subCard, index) => (
            <Resource
              key={index}
              subCard={subCard}
              index={index}
              task={task}
              resource={resource}
              resourceColor={resourceColor}
              checked={resource[`card${index}`]}
              setResource={setResource}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
