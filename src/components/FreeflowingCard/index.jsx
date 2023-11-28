import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { PercentageScore } from "../PercentageScore";
import "./style.css";

export const FreeflowingCard = ({ cardName, cardUrl }) => {
  const navigateTo = useNavigate();

  const checkIfLoggedIn = () => {
    if (localStorage.getItem("jobQuestEmail")) {
      navigateTo(`/${cardUrl}`); //navigate to taskCard
    } else {
      //to-do: show user alert that they need to login
      navigateTo("/login");
    }
  };

  return (
    <Card className={`card-div cursor-pointer ${cardUrl}`} onClick={() => checkIfLoggedIn()}>
      <CardBody>
        <div style={{ width: '0%', height: '10%', position: 'relative', top: '7.8%', left: '72%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
          <PercentageScore />
        </div>
        <p className="card-name">{cardName}</p>
      </CardBody>
    </Card>
  );
};

FreeflowingCard.propTypes = {
  cardName: PropTypes.string,
  cardUrl: PropTypes.string,
};
