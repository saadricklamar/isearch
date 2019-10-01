import React from "react";

const Music = props => {
  return (
    <section className="music-list">
      <h3>Music</h3>
      {props.results.map(item => {
        if (item.kind === "song") {
          return (
            <a href={item.trackViewUrl} target="_blank">
              <article className="music-card">
                <img
                  src={item.artworkUrl100}
                  alt="album cover"
                  className="album-cover"
                ></img>
                <p>Song:{item.trackName}</p>
                <p>Album:{item.collectionName}</p>
                <p>Artist: {item.artistName} </p>
              </article>
            </a>
          );
        }
      })}
    </section>
  );
};

export default Music;
