import React from "react";
import { ListGroup } from "react-bootstrap";

const Music = props => {
  function convertToMinutes(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <section>
      <h3>Music</h3>
      <ListGroup className="list">
        {props.results.map(item => {
          if (item.kind === "song") {
            return (
              <a href={item.trackViewUrl} target="_blank">
                <ListGroup.Item variant="info" className="track">
                  <img src={item.artworkUrl100} alt="Album Cover"></img>
                  <p className="item">Song: {item.trackName} </p>
                  <p className="item">Artist: {item.artistName} </p>
                  <p className="item">Album Price: ${item.collectionPrice}</p>
                  <p className="item">Track Price: ${item.trackPrice}</p>
                  <p className="item">
                    Length: {convertToMinutes(item.trackTimeMillis)}
                  </p>
                </ListGroup.Item>
              </a>
            );
          }
        })}
      </ListGroup>
    </section>
  );
};

export default Music;
