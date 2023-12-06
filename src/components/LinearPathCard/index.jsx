import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Card, CardBody, useDisclosure, card } from "@nextui-org/react";
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
  //current problem, if I open linear path go to freeflowing then back to linear path the useEffect, [value] updates and it shouldnt be updating. Need to dynamically determine if the user clicked free flowing or linear path and then determine disabling based off of that.
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
    if (value === 100 && !(isDisabled > resourceArr[cardName])) {
      // Check for value and isEnabled to update isDisabled state
      setIsDisabled((prev) => prev + 1);
    }
  }, [value, setIsDisabled]);

  const checkIfLoggedIn = () => {
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus === "true") {
      navigateTo(`/${cardUrl}`);
    } else {
      onOpen();
    }
  };

  useEffect(() => {
    fetchPercentage(cardName, setValue);
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
      />
    </>
  );
};

LinearPathCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
};
