import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";
import { PercentageScore } from "../PercentageScore";
import "./style.css";

export const LinearPathCard = ({ cardName }) => {
  const currentCardName = cardName;

  return (
      <Card className="linearpath-card-div">
        <CardBody>
        <PercentageScore />
          <p className="card-name">{currentCardName}</p>
        </CardBody>
      </Card>
  );
};

LinearPathCard.propTypes = {
  cardName: PropTypes.string,
};
