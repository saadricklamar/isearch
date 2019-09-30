import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">
      <header className="about-header">
        <Link className="go-home" to="/">
          <i class="fas fa-arrow-left"></i>
        </Link>
      </header>
      <h2>This is an about page</h2>
    </div>
  );
};

export default About;
