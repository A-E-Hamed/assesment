import React from "react";
import { DUMMY_SIMILAR } from "../../constants/dummy";
import SimilarProduct from "../SimilarProduct/SimilartProduct";
import classes from "./SimilarSection.module.scss";
import Container from "../Container/Container";
const SimilarSection = () => {
  const productList = DUMMY_SIMILAR.map((product) => (
    <SimilarProduct
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <Container>
      <div className={classes.mainContainer}>
        <div>
          <h2>Similar Products</h2>
          <p>You may like these products also</p>
        </div>
        <div className={classes.smallContainer}>{productList}</div>
      </div>
    </Container>
  );
};

export default SimilarSection;
