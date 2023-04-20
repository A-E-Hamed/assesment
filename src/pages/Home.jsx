import React from "react";
import classes from "./ProductDisplay.module.scss";
import Slider from "../components/Slider/Slider";
import RatingStars from "../components/RatingStars/RatingStars";

const Home = ({
  productItem,
  handleDecrement,
  handleIncrement,
  quantity,
  addToCartHandler,
}) => {
  const products = productItem?.map((product, idx) => (
    <React.Fragment key={++idx}>
      <div className={classes.container}>
        <div className={classes.img_container}>
          <Slider />
        </div>
        <div className={classes.product_info}>
          <div>
            <h1>{product.name}</h1>
            {product.description}
          </div>
          <div className={classes.price_control_container}>
            <div>
              <RatingStars />
            </div>
            <div className={classes.price_control}>
              <div>
                <h3>Price:</h3>
              </div>
              <div>
                <h4>{product.price}</h4>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={classes.size_container}>
            <h3>Size</h3>
            <div className={classes.size_section}>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <hr></hr>
          <div>
            <div className={classes.main_container}>
              <div className={classes.counter_block}>
                <button
                  onClick={handleDecrement}
                  className={classes.min_button}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className={classes.plus_button}
                >
                  +
                </button>
              </div>
              <div className={classes.cart_block}>
                <div>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className={classes.add_button}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button className={classes.pick_button}>
                    Pickup from store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ));
  return <>{products}</>;
};

export default Home;
