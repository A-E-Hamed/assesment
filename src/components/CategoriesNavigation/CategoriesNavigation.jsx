import classes from "./CategoriesNavigation.module.scss";
import Container from "../Container/Container";

const CategoriesNavigation = (props) => {
  return (
    <div className={classes.container}>
      <Container>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Unisex</li>
          <li>Kids</li>
          <li>Best Sellers</li>
          <li>New Arrivals</li>
          <li>Offers</li>
        </ul>
      </Container>
    </div>
  );
};

export default CategoriesNavigation;
