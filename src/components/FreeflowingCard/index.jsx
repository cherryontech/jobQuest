import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Card, CardBody, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { PercentageScore } from "../PercentageScore";
import { fetchPercentage } from "../PercentageScore/fetchPercentage";
import { ModalPopup } from "../ModalPopup";
import "./style.css";

export const FreeflowingCard = ({ cardName, cardUrl }) => {
  const navigateTo = useNavigate();
  const [value, setValue] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  useEffect(() => {
    fetchPercentage(cardName, setValue);
  }, [cardName]);

  const checkIfLoggedIn = () => {
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus === "true") {
      navigateTo(`/${cardUrl}`);
    } else {
      onOpen();
    }
  }; 

  return (
    <div onClick={() => checkIfLoggedIn()}>
      <Card className={`card-div cursor-pointer ${cardUrl}`}>
        <CardBody>
          <div
            style={{
              width: "0%",
              height: "10%",
              position: "relative",
              top: "7.8%",
              left: "72%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <PercentageScore color={"warning"} value={value} />
          </div>
          <p className="card-name">{cardName}</p>
        </CardBody>
      </Card>
      <ModalPopup isOpen={isOpen} onOpenChange={onOpenChange} heading="Want to save progress?" subHeading="Sign up or login now to see your completion!" cta="Sign Up Free" bottomLine="Already have an account?"/>
    </div>
  );
};

FreeflowingCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
};
