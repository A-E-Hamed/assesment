import RatingStars from "../RatingStars/RatingStars";
import classes from "./SimilarProducts.module.scss";

const SimilarProduct = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.card}>
        <div className={classes.productPicture}>
          <img src={props.image} alt="disc" />
        </div>
        <div className={classes.desc}>
          <div>
            <p> {props.description}</p>
          </div>
          <div>
            <div className={classes.priceControl}>
              <div>
                <h4>
                  {props.price} <p>LE</p>
                </h4>
                <div className={classes.price}>
                  <div className={classes.saleSection}>
                    <del>{props.price} LE</del>
                    <div className={classes.sale}>
                      <p>30%</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="images/adidasLogo.png"
                alt="Logo"
                className={classes.logo}
              />
            </div>
          </div>
          <div className={classes.ratingSection}>
            <RatingStars />
            <h5>4.2 of 5</h5>
          </div>
          <div className={classes.bottomSection}>
            <p>
              Pick up from: <span>genena mall</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
