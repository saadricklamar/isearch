import React from "react";
import { ListGroup } from "react-bootstrap";

const Television = props => {
  return (
    <section>
      <h3>Television</h3>
      <ListGroup className="list">
        {props.results.map(item => {
          if (item.kind === "tv-episode") {
            return (
              <ListGroup.Item variant="info" className="track-name">
                {item.trackName}
              </ListGroup.Item>
            );
          }
        })}
      </ListGroup>
    </section>
  );
};

export default Television;
