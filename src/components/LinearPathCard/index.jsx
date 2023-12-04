import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { PercentageScore } from "../PercentageScore";
import { fetchPercentage } from "../PercentageScore/fetchPercentage";
import "./style.css";

export const LinearPathCard = ({ cardName, cardUrl }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchPercentage(cardName, setValue);
  }, []);
  
  return (
    <Card className={`linearpath-card-div ${cardUrl}`}>
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
