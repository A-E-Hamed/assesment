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
        <div className={classes.imgContainer}>
          <Slider />
        </div>
        <div className={classes.productInfo}>
          <div>
            <h1>{product.name}</h1>
            {product.description}
          </div>
          <div className={classes.priceControlContainer}>
            <div>
              <RatingStars />
            </div>
            <div className={classes.priceControl}>
              <div>
                <h3>Price:</h3>
              </div>
              <div>
                <h4>{product.price}</h4>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={classes.sizeContainer}>
            <h3>Size</h3>
            <div className={classes.sizeSection}>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <hr></hr>
          <div>
            <div className={classes.mainContainer}>
              <div className={classes.counterBlock}>
                <button
                  onClick={handleDecrement}
                  className={classes.minButton}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className={classes.plusButton}
                >
                  +
                </button>
              </div>
              <div className={classes.cartBlock}>
                <div>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className={classes.addButton}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button className={classes.pickButton}>
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
