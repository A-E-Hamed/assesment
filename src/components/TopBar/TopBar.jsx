import classes from "./TopBar.module.scss";
const TopBar = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.menuLogo}>
        <img src="images/menu.svg" alt="menu" />
      </div>
      <div className={classes.mainLogo}>
      <img src="images/brand.svg" alt="menu" />
      </div>
      <div>
        <p>Valentians day offer. Buy Two get one free</p>
      </div>
      <div className={classes.rightSection}>
        <img src="images/call.svg" alt="contact us" />
        <p>Contact us</p>
      </div>
      <div className={classes.rightSection}>
        <img src="images/trackOrder.svg" alt="Track" />
        <p>Track order</p>
      </div>
      <div className={classes.rightSection}>
        <img src="images/findStore.svg" alt="menu" />
        <p>Find A Store</p>
      </div>
    </div>
  );
};

export default TopBar;
