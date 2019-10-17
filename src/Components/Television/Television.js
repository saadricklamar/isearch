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
              <a href={item.trackViewUrl} target="_blank">
                <ListGroup.Item variant="primary" className="television">
                  <img src={item.artworkUrl100} alt="Television Poster"></img>
                  <p className="item">Show: {item.artistName} </p>
                  <p className="item">Episode: {item.trackName} </p>
                  <p className="item">Buy: ${item.collectionPrice}</p>
                  <p className="item">Rent ${item.trackPrice}</p>
                </ListGroup.Item>
              </a>
            );
          }
        })}
      </ListGroup>
    </section>
  );
};

export default Television;
