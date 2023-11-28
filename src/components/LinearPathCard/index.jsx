import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";
import { PercentageScore } from "../PercentageScore";
import "./style.css";

export const LinearPathCard = ({ cardName, cardUrl }) => {

  return (
    <Card className={`linearpath-card-div ${cardUrl}`}>
        <CardBody>
        <PercentageScore />
          <p className="card-name">{cardName}</p>
        </CardBody>
      </Card>
  );
};

LinearPathCard.propTypes = {
  cardName: PropTypes.string,
};
