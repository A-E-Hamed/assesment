import Container from "../Container/Container";
import classes from "./TopBar.module.scss";
import { RiMenu2Fill } from "react-icons/ri";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
const TopBar = () => {
  return (
    <div style={{ backgroundColor: "#fff100" }}>
      <Container>
        <div className={classes.mainContainer}>
          <div className={classes.navBarBrand}>
            <RiMenu2Fill size={25} />
            <img
              src="images/brand.svg"
              alt="menu"
              className={classes.mainLogo}
            />
          </div>
          <div className={classes.mainLogo}></div>
          <div className={classes.adveriseTexts}>
            <RxChevronLeft size={25} />
            <p>
              Valentine's day offer. Buy Two get one free{" "}
              <a href="#">Shop Now</a>
            </p>
            <RxChevronRight size={25} />
          </div>
          <div className={classes.rightTopNav}>
            <div className={classes.rightSectionBtn}>
              <img src="images/call.svg" alt="contact us" />
              <p>Contact us</p>
            </div>
            <div className={classes.rightSectionBtn}>
              <img src="images/trackOrder.svg" alt="Track" />
              <p>Track order</p>
            </div>
            <div className={classes.rightSectionBtn}>
              <img src="images/findStore.svg" alt="menu" />
              <p>Find A Store</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
