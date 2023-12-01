import PropTypes from "prop-types";
import { Card, CardBody } from "@nextui-org/react";
import { PercentageScore } from "../PercentageScore";
import "./style.css";

export const LinearPathCard = ({ cardName, cardUrl }) => {

  return (
    <Card className={`linearpath-card-div ${cardUrl}`}>
      <CardBody>
      <div style={{ width: '0%', height: '10%', position: 'relative', top: '8.8%', left: '86%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex' }}>
        <PercentageScore />
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
