import React, { Fragment } from "react";
import rev1 from "./img/rev1.jpg";
import rev2 from "./img/rev2.jpg";
import rev3 from "./img/rev3.jpg";
const Customer = () => {
  return (
    <Fragment>
      <section className="cutomers" id="customers">
        <div className="heading">
          <h2>Our Customer's</h2>
        </div>
        <div className="customers-container">
          <div className="box">
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              eligendi veritatis. Culpa dolorem, molestias, non provident
              accusantium suscipit aliquid quisquam id voluptate repudiandae
              facilis adipisci inventore, sint maxime illum expedita.
            </p>
            <h2>Yasin Khan</h2>
            <img src={rev1} alt="customers"></img>
          </div>
          <div className="box">
            <div className="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              eligendi veritatis. Culpa dolorem, molestias, non provident
              accusantium suscipit aliquid quisquam id voluptate repudiandae
              facilis adipisci inventore, sint maxime illum expedita.
            </p>
            <h2>Yasin Khan</h2>
            <img src={rev2} alt="customers"></img>
          </div>
          <div className="box">
            <div className="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              eligendi veritatis. Culpa dolorem, molestias, non provident
              accusantium suscipit aliquid quisquam id voluptate repudiandae
              facilis adipisci inventore, sint maxime illum expedita.
            </p>
            <h2>Yasin Khan</h2>
            <img src={rev3} alt="customers"></img>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Customer;
