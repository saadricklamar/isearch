import React from "react";
import { ListGroup } from "react-bootstrap";

const Movies = props => {
  return (
    <section>
      <h3>Movies</h3>
      <ListGroup className="list">
        {props.results.map(item => {
          if (item.kind === "feature-movie") {
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

export default Movies;
