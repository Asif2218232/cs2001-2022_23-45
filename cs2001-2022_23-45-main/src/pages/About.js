
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1 style={{ color: "black" }}>About Us</h1>
      <p style={{ color: "black" }}>
        Our project is dedicated to raising awareness about the impacts of
        climate change and promoting actions that can mitigate these impacts.
        We believe that everyone has a role to play in addressing this global
        issue, and that by working together, we can create a better future for
        ourselves and the planet.
      </p>
      <h2 style={{ color: "black" }}>Our Team</h2>
      <ul style={{ color: "black" }}>
        <li>
          <strong>name</strong> - role
        </li>
        <li>
          <strong>name</strong> - role
        </li>
        <li>
          <strong>name</strong> - role
        </li>
        <li>
          <strong>name</strong> - role
        </li>
      </ul>
      <h2 style={{ color: "black" }}>Contact Us</h2>
      <p style={{ color: "black" }}>
        If you have any questions or comments about our project, please feel
        free to contact us at (email address)
      </p>
    </div>
  );
}

export default About;