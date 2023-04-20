import classes from "./CategoriesNavigation.module.scss";

const CategoriesNavigation = (props) => {
  return (
    <div className={classes.container}>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Unisex</li>
        <li>Kids</li>
        <li>Best Sellers</li>
        <li>New Arrivals</li>
        <li>Offers</li>
      </ul>
    </div>
  );
};

export default CategoriesNavigation;
