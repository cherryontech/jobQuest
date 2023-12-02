import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  Divider,
  Button,
} from "@nextui-org/react";

//fontAwesome icons for the dropdown menu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function TCard({
  setResource,
  resource,
  task,
  resourceColor,
  subCard,
  index,
  checked,
}) {
  //for dropdown
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);
  const [wrapper, setWrapper] = useState("");
  const navigateTo = useNavigate()

  //updates checked after initial render of task page
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  //setting nextui wrapper slot
  useEffect(() => {
    setWrapper(
      resourceColor === "danger"
        ? { wrapper: `before:border-danger` }
        : resourceColor === "success"
        ? { wrapper: `before:border-success` }
        : { wrapper: `before:border-secondary` }
    );
  }, [resourceColor]);

  const handleCheckboxChange = (key) => (event) => {
    setIsChecked(event);
    //update new state change within object
    const updatedInfo = { ...resource, [key]: event };
    setResource(updatedInfo);
    //update localStorage with updated information
    localStorage.setItem(task, JSON.stringify(updatedInfo));
  };

  return (
    <div key={index} className="flex justify-around m-5 z-0">
      <Card
        shadow="none"
        className={`w-5/6`}
        style={{
          border: "2px solid #D9E2F3",
          backgroundColor: `${
            isVisible
              ? task === "linkedin"
                ? "#FFEAEA"
                : task === "resume"
                ? "#DEE6F4"
                : "#EDF9F4"
              : ""
          }`,
        }}
      >
        <CardHeader className="flex justify-between items-center px-3 z-0">
          <div className="flex ">
            <Checkbox
              isSelected={isChecked}
              onValueChange={handleCheckboxChange(`card${index}`)}
              size="lg"
              color={`${resourceColor}`}
              classNames={wrapper}
              className="text-white mx-2"
            />
            <p className="text-md font-bold">{subCard.title}</p>
          </div>
          <Button
            onClick={() => setIsVisible(!isVisible)}
            className={`bg-transparent text-${resourceColor}`}
          >
            {isVisible ? (
              <FontAwesomeIcon icon={faAngleUp} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} size="xl" />
            )}
          </Button>
        </CardHeader>
        {isVisible && (
          <>
            <Divider
              style={{
                border: `1px solid ${task === "resume" ? "white" : "#D9E2F3"} `,
              }}
            />
            <CardBody className="py-6 pl-10">
              <div className="mx-10">
                {subCard.description.map((desc, descIndex) => (
                  <div key={descIndex}>
                    <p>{desc}</p>
                    {descIndex !== subCard.description.length - 1 && <br />}
                  </div>
                ))}
                {subCard.button && (
                  <>
                    <br />
                    <Button
                      onClick={
                        subCard.button === "See Articles"
                          ? () => navigateTo('/articles')
                          : undefined
                      }
                      className={`text-white w-1/6 bg-${resourceColor}`}
                    >
                      {subCard.button}
                    </Button>
                  </>
                )}
              </div>
            </CardBody>
          </>
        )}
      </Card>
    </div>
  );
}
