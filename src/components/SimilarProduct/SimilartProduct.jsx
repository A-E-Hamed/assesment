import RatingStars from "../RatingStars/RatingStars";
import classes from "./SimilarProducts.module.scss";

const SimilarProduct = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.card}>
        <div className={classes.productPicture}>
          <img src={props.image} alt="disc" />
        </div>
        <div>
          <p> {props.description}</p>
        </div>
        <div>
          <div>
            <RatingStars />
          </div>
          <div className={classes.priceControl}>
            <p> {props.price}</p>
            <img src="images/adidasLogo.png" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
