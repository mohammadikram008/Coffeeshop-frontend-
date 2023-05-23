import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section className="footer">
        <div className="footer-box">
          <h2>Coffee Shop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            reprehenderit ipsum repudiandae provident labore unde aspernatur
            doloremque possimus nostrum doloribus! Molestias ipsum est veniam
            magni sint facere voluptates et aliquam!
          </p>
          <div className="social">
            <a href="#">
              {" "}
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#">
              {" "}
              <i class="bx bxl-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Support</h3>
          <li>
            <a href="3">Product</a>
          </li>
          <li>
            <a href="3">Help & Support</a>
          </li>
          <li>
            <a href="3">Return</a>
          </li>
          <li>
            <a href="3">Terms Of Use</a>
          </li>
          <li>
            <a href="3">Product</a>
          </li>
        </div>
        <div className="footer-box">
          <h3>View Guides</h3>
          <li>
            <a href="3">Feature</a>
          </li>
          <li>
            <a href="3">Careers</a>
          </li>
          <li>
            <a href="3">Blog Posts</a>
          </li>
          <li>
            <a href="3">Our Branches</a>
          </li>
        </div>
        <div className="footer-box">
          <h3>Contact</h3>
          <div className="contact">
            <span>
              <i class="bx bxs-map"></i>250 Cew York City,USA 10001
            </span>
            <span>
              <i class="bx bxs-phone"></i>+1 333 744 8777
            </span>
            <span>
              <i class="bx bxs-envelope"></i>coffee@shop.com
            </span>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>&#169; CarpoolVenom All Right Reserved</p>
      </div>
    </Fragment>
  );
};

export default Footer;
