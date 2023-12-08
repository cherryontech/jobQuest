import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Card, CardBody, useDisclosure } from "@nextui-org/react";
import { PercentageScore } from "../PercentageScore";
import { fetchPercentage } from "../PercentageScore/fetchPercentage";
import { ModalPopup } from "../ModalPopup";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const LinearPathCard = ({
  cardName,
  cardUrl,
  isDisabled,
  setIsDisabled,
}) => {
  const [value, setValue] = useState(0);
  const navigateTo = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const resourceArr = {
    LinkedIn: 0,
    Resume: 1,
    "Interview Prep": 2,
    "Application Advice": 3,
    "Job Searching Tips": 4,
    "Bonus Tasks": 5,
  };

  useEffect(() => {
    //updates if the card is not enabled
    if (value === 100 && !(isDisabled > resourceArr[cardName])) {
      setIsDisabled((prev) => prev + 1);
    }
  }, [value, setIsDisabled]);

  const checkIfLoggedIn = () => {
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus === "true") {
      navigateTo(`/linear/${cardUrl}`);
    } else {
      onOpen();
    }
  };

  useEffect(() => {
    let status = JSON.parse(localStorage.getItem('loginStatus'))
    if (status) fetchPercentage(cardName, setValue);
  }, [cardName]);

  return (
    <>
      <Card
        isDisabled={!(isDisabled >= resourceArr[cardName])}
        isPressable={isDisabled >= resourceArr[cardName]}
        onPress={() => checkIfLoggedIn()}
        className={`linearpath-card-div ${cardUrl}`}
      >
        <CardBody>
          <div
            style={{
              width: "0%",
              height: "10%",
              position: "relative",
              top: "8.8%",
              left: "86%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <PercentageScore color={"warning"} value={value} />
          </div>
          <p className="linearpath-card-name">{cardName}</p>
        </CardBody>
      </Card>
      <ModalPopup
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        heading="Want to save progress?"
        subHeading="Sign up or login now to see your completion!"
        cta="Sign Up Free"
        bottomLine="Already have an account?"
        onBtnClick={() => navigateTo("/signup")}
      />
    </>
  );
};

LinearPathCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
  isDisabled: PropTypes.bool,
  setIsDisabled: PropTypes.func
};
