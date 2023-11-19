import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  Divider,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function TCard({ subCard, index }) {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div key={index} className="flex justify-around m-5" >
      <Checkbox size="lg" color="danger" className="text-white" />
      <Card
        shadow="none"
        className="w-5/6"
        style={{ border: "1px solid #D9E2F3" }}
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
            <CardBody className="py-10 px-5">
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
          </>
        )}
      </Card>
    </div>
  );
}
