import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { PercentageScore } from "../../components/PercentageScore/index";

import Resource from "./Card";

import mascot from "../../assets/finalHomepage.png";

import { fetchPercentage } from "../../components/PercentageScore/fetchPercentage";

export default function TaskCard() {
  const { task } = useParams();
  const [isDisabled, setIsDisabled] = useState(0);
  const [taskCardData, setTaskCardData] = useState([]);
  const [resource, setResource] = useState({});
  const [value, setValue] = React.useState(0);
  const [resourceColor, setResourceColor] = useState();
  const navigateTo = useNavigate();

  useEffect(() => {
    fetchPercentage(task, setValue);
  }, [resource, taskCardData]);

  useEffect(() => {
   
      const fetchResourceInfo = () => {
        let res = JSON.parse(localStorage.getItem(task));
        let numberEnabled = JSON.parse(localStorage.getItem(`${task}Enabled`));

        //on initial render set the key/value pairs of cards in localStorage
        if (!res) {
          res = {};
          localStorage.setItem(task, JSON.stringify(res));
          localStorage.setItem(`${task}Enabled`, JSON.stringify(0));
        } else {
          //else grab what's already in localStorage and render
          setResource(res);
          setIsDisabled(numberEnabled);
        }
      };
      const fetchTaskJsonFile = async () => {
        try {
          const response = (await import(`./module-${task}.json`)).default;
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
        <div className="w-2/5 z-0">
          <Image src={mascot} sizes={"md"} />
        </div>
      </div>
      <div className="p-10" style={{ backgroundColor: "#D9E2F3" }}>
        <div className="w-4/5 m-auto px-20">
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
            <PercentageScore value={value} color={resourceColor} />
          </div>
          {taskCardData.map((subCard, index) => (
            <Resource
              key={index}
              subCard={subCard}
              index={index}
              task={task}
              resource={resource}
              isDisabled={isDisabled}
              setIsDisabled={setIsDisabled}
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
