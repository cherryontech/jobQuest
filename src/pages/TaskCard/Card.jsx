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

export default function TCard({
  setResource,
  resource,
  subCard,
  index,
  checked,
}) {
  //for dropdown
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);

  //updates checked after initial render of task page
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleCheckboxChange = (key) => (event) => {
    setIsChecked(event);
    //update new state change within object
    const updatedInfo = { ...resource, [key]: event };
    setResource(updatedInfo);
    //update localStorage with updated information
    localStorage.setItem("linkedin", JSON.stringify(updatedInfo));
  };

  return (
    <div key={index} className="flex justify-around m-5 ">
      <Checkbox
        isSelected={isChecked}
        onValueChange={handleCheckboxChange(`card${index}`)}
        size="lg"
        color="danger"
        className="text-white"
        classNames={{ base: "outline-black" }}
        isInvalid={true}
      />
      <Card
        shadow="none"
        className="w-5/6"
        style={{ border: "2px solid #D9E2F3" }}
      >
        <CardHeader className="flex justify-between items-center px-5">
          <p className="text-md font-bold">{subCard.title}</p>
          <Button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-transparent"
          >
            {isVisible ? (
              <FontAwesomeIcon
                className="text-[#FF6667]"
                icon={faAngleUp}
                size="xl"
              />
            ) : (
              <FontAwesomeIcon
                className="text-[#FF6667]"
                icon={faAngleDown}
                size="xl"
              />
            )}
          </Button>
        </CardHeader>
        {isVisible && (
          <>
            <Divider style={{ border: "1px solid #D9E2F3" }} />
            <CardBody className="py-6 px-5">
              {subCard.description.map((desc, descIndex) => (
                <div key={descIndex}>
                  <p>{desc}</p>
                  {descIndex !== subCard.description.length - 1 && <br />}
                </div>
              ))}
              {subCard.button && (
                <>
                  <br />
                  <Button className="bg-[#FF6667] text-white w-1/6">
                    {subCard.button}
                  </Button>
                </>
              )}
            </CardBody>
          </>
        )}
      </Card>
    </div>
  );
}
