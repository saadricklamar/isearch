import React from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="favorites">
      <header className="favorites-header">
        <Link className="go-home" to="/">
          <i class="fas fa-arrow-left"></i>
        </Link>
      </header>
      <h2>This is a Favorites page</h2>
    </div>
  );
};

export default Favorites;
