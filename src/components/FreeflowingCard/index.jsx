import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { PercentageScore } from "../PercentageScore";
import "./style.css";

export const FreeflowingCard = ({ cardName, cardUrl }) => {
  const navigateTo = useNavigate();

  const checkIfLoggedIn = () => {
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus === "true") {
      navigateTo(`/${cardUrl}`);
    } else {
      //to-do: show user alert that they need to login
      navigateTo("/login");
    }
  };

  return (
    <div onClick={() => checkIfLoggedIn()}>
      <Card className={`card-div cursor-pointer ${cardUrl}`}>
        <CardBody>
          <div style={{ width: '0%', height: '10%', position: 'relative', top: '7.8%', left: '72%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
            <PercentageScore />
          </div>
          <p className="card-name">{cardName}</p>
        </CardBody>
      </Card>
    </div>
  );
};

FreeflowingCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
};
