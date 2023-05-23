import React, { Fragment } from "react";
import about from "./img/about.jpg";
const About = () => {
  return (
    <Fragment>
      <section className="about" id="about">
        <div className="about-img">
          <img src={about} alt="about" />
        </div>
        <div className="about-text">
          <h2>out History</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta,
            placeat omnis debitis voluptatum fugit fuga doloremque repudiandae
            iste officiis voluptatem tempore corporis vero consectetur quo
            explicabo eius itaque nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta,
            placeat omnis debitis voluptatum fugit fuga doloremque repudiandae
            iste officiis voluptatem tempore corporis vero consectetur quo
            explicabo eius itaque nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta,
            placeat omnis debitis voluptatum fugit fuga doloremque repudiandae
            iste officiis voluptatem tempore corporis vero consectetur quo
            explicabo eius itaque nam.
          </p>
          <a href="#" className="btn">
            Learn More{" "}
          </a>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
