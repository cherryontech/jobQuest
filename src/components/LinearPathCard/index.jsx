import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { PercentageScore } from "../PercentageScore";
import { fetchPercentage } from "../PercentageScore/fetchPercentage";
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

  const resourceArr = {
    LinkedIn: 0,
    Resume: 1,
    "Interview Prep": 2,
    "Application Advice": 3,
    "Job Searching Tips": 4,
    "Bonus Tasks": 5,
  };

  useEffect(() => {
    if (value === 100) {
      setIsDisabled((prev) => prev + 1);
    }
  }, [value]);

  const checkIfLoggedIn = () => {
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus === "true") {
      navigateTo(`/${cardUrl}`);
    } else {
      //to-do: show user alert that they need to login
      navigateTo("/login");
    }
  };

  useEffect(() => {
    fetchPercentage(cardName, setValue);
  }, []);

  return (
    <Card
      isDisabled={isDisabled < resourceArr[cardName]}
      isPressable={!(isDisabled < resourceArr[cardName])}
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
  );
};

LinearPathCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
};
