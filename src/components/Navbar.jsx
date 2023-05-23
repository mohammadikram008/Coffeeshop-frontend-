import React, { Fragment, useState } from "react";
import logo from "./img/logo.png";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const [count, setCount] = useState(0);
  const addvalue = useSelector((state) => state.counter);
  let search = document.querySelector(".search-box");
  let navbar = document.querySelector(".navbar");

  // let header = document.querySelector("header");
  // window.addEventListener("scroll", () => {
  //   header.classList.toggle("shadow", window.scrollY > 0);
  // });
  //   document.querySelector("#search-icon").onclick = () => {
  //     search.classList.toggle("active");
  //   };
  window.onscroll = () => {
    // navbar.classList.remove("active");
    // search.classList.remove("active");
  };
  const opensearchbar = () => {
      // search.classList.toggle("active");
      // navbar.classList.remove("active");
    },
    menuclick = () => {
      console.log("click");
      // navbar.classList.toggle("active");
      // search.classList.remove("active");
    };
  return (
    <Fragment>
      <header>
        <a href="#" className="logo">
          <img src={logo} alt="logo"></img>
        </a>
        <i className="bx bx-menu" id="menu-icon" onClick={menuclick}></i>
        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#customers">Customers</a>
          </li>
        </ul>
        {/* icon */}
        <div className="hearder-icon">
          <i className="bx bx-cart-alt"></i>
          <div className="cart-count">
            <span>{addvalue}</span>
          </div>
          <i
            className="bx bx-search"
            id="search-icon"
            onClick={opensearchbar}
          ></i>
        </div>
        <div className="search-box">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Here .... "
          ></input>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
