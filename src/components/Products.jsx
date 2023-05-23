import React, { Fragment } from "react";
import products from "./img/p1.png";
import products2 from "./img/p2.png";
import products3 from "./img/p3.png";
import products4 from "./img/p4.png";
import products5 from "./img/p5.png";
import products6 from "./img/p6.png";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "./Redux/Action";
const Products = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <section className="products" id="products">
        <div className="heading">
          <h2>Our Popular Products</h2>
        </div>
        <div className="products-container">
          <div className="box">
            <img src={products} alt="prodcuts" />
            <h3>Americano Pure</h3>
            <div className="content">
              <span>$25</span>
              <h5 onClick={() => dispatch(addtocart(1))}>Add to cart</h5>
            </div>
          </div>
          <div className="box">
            <img src={products2} alt="prodcuts" />
            <h3>Americano Pure</h3>
            <div className="content">
              <span>$25</span>
              <h5 onClick={() => dispatch(addtocart(1))}>Add to cart</h5>
            </div>
          </div>
          <div className="box">
            <img src={products3} alt="prodcuts" />
            <h3>Americano Pure</h3>
            <div className="content">
              <span>$25</span>
              <h5 onClick={() => dispatch(addtocart(1))}>Add to cart</h5>
            </div>
          </div>
          <div className="box">
            <img src={products4} alt="prodcuts" />
            <h3>Americano Pure</h3>
            <div className="content">
              <span>$25</span>
              <h5 onClick={() => dispatch(addtocart(1))}>Add to cart</h5>
            </div>
          </div>
          <div className="box">
            <img src={products5} alt="prodcuts" />
            <h3>Americano Pure</h3>
            <div className="content">
              <span>$25</span>
              <h5 onClick={() => dispatch(addtocart(1))}>Add to cart</h5>
            </div>
          </div>
          <div className="box">
            <img src={products6} alt="prodcuts" />
            <h3>Americano Pure</h3>
            <div className="content">
              <span>$25</span>
              <h5 onClick={() => dispatch(addtocart(1))}>Add to cart</h5>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Products;
