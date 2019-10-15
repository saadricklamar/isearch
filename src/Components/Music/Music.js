import React from "react";
import { ListGroup } from "react-bootstrap";

const Music = props => {
  return (
    <section>
      <h3>Music</h3>
      <ListGroup className="music-list">
        {props.results.map(item => {
          if (item.kind === "song") {
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

export default Music;
