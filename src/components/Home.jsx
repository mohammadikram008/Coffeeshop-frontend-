import React, { Fragment } from "react";
import home from "./img/main.png";
const Home = () => {
  return (
    <Fragment>
      <section className="home" id="home">
        <div className="home-text">
          <h1>
            Start your day <br></br> with coffee{" "}
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            praesentium commodi maiores iure et necessitatibus saepe impedit
            cum! Quos aspernatur quisquam suscipit. Quibusdam similique ratione
            aspernatur provident? Eos, beatae ad?
          </p>
          <a href="" className="btn">
            Shop Now
          </a>
        </div>
        <div className="img-home">
          <img src={home} alt="home"></img>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
