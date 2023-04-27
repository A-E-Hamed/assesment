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
            <img src="images/adidasLogo.png" alt="Logo" />
            <h4>{product.description}</h4>
            <p>Men</p>
          </div>
          <div className={classes.middleContainer}>
            <div className={classes.ratingContainer}>
              <RatingStars />
              <h4>4.5 of 5</h4>
              <p>22 Rates</p>
            </div>
            <div className={classes.priceControl}>
              <div className={classes.priceTag}>
                <h2>{product.price}</h2>
                <p>LE</p>
              </div>
              <div className={classes.price}>
                <p>{product.price} LE</p>
              </div>
              <div className={classes.sale}>
                <p>30% off</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={classes.sizeContainer}>
            <h3>Size</h3>
            <div className={classes.sizeSection}>
              <div>Small</div>
              <div>Medium</div>
              <div>Large</div>
              <div>X Large</div>
              <div>XX Large</div>
            </div>
          </div>
          <hr></hr>
          <div className={classes.colorImgContainer}>
            <h3>Color</h3>
            <div className={classes.colorImg}>
              <img src="images/shirt6.jpg" alt="shirt" />
            </div>
          </div>
          <hr></hr>
          <div>
            <div className={classes.quentityContainer}>
            <h3>Quentity</h3>
              <div className={classes.counterBlock}>
                <button onClick={handleDecrement} className={classes.minButton}>
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
