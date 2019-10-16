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
              <a href={item.trackViewUrl} target="_blank">
                <ListGroup.Item variant="warning" className="movie">
                  <img src={item.artworkUrl100} alt="Movie Poster"></img>
                  <p className="item">Movie: {item.trackName} </p>
                  <p className="item">Producer: {item.artistName} </p>
                  <p className="item">Buy: ${item.trackPrice}</p>
                  <p className="item">Rent ${item.trackRentalPrice}</p>
                </ListGroup.Item>
              </a>
            );
          }
        })}
      </ListGroup>
    </section>
  );
};

export default Movies;
