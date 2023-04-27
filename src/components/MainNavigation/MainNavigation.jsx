import HeadderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./MainNavigation.module.scss";
import Container from "../Container/Container";
import { RxHeart } from "react-icons/rx";
import { RiUserLine } from "react-icons/ri";
const MainNavigation = ({ cartItems, conuter }) => {
  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.searchBar}>
          <img src="images/search.svg" alt="search" />
          <input type="search" placeholder="Search" />
        </div>
        <div>
          <img src="images/adidasLogo.png" alt="Logo" />
        </div>
        <div className={classes.buttonBlock}>
          <HeadderCartButton cartItems={cartItems} cartCount={conuter} />
          <div>
            <button type="button">
              <RxHeart size={25} />
              <span>Whishlist</span>
            </button>
          </div>
          <div>
            <button type="button">
              <RiUserLine size={25} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainNavigation;
