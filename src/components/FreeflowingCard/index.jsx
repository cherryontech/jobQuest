import PropTypes from "prop-types";
import {
    Card,
    CardBody,
} from "@nextui-org/react";
import { PercentageScore } from "../../components/PerecentageScore";
import "./style.css";

export const FreeflowingCard = ({cardName}) => {
    const currentCardName = cardName;

    return (
        <Card className="card-div">
                  <CardBody>
                    {/* <div className="card-div"> */}
                    <PercentageScore />
                <p className="card-name">{currentCardName}</p>
                    {/* </div> */}
                  </CardBody>
                </Card>
    )
}

FreeflowingCard.propTypes = {
    cardName: PropTypes.string
  };