import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const PlayersList = props => {
  return (
    <div>
      {props.data.map(player => {
        return (
          <>
            <Card className="shadow lg">
              <CardImg
                top
                width="100%"
                src={player.img}
                alt="Flag"
                key={player.id}
              />
              <CardBody>
                <CardTitle>Name: {player.name}</CardTitle>
                <CardSubtitle>Country: {player.country}</CardSubtitle>
                <CardText>Searches: {player.searches}</CardText>
              </CardBody>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default PlayersList;
