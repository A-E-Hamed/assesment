import HeadderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./MainNavigation.module.scss";

const MainNavigation = ({ cartItems, conuter }) => {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <input type="search" placeholder="Search" />
      </div>
      <div>
        <img src="images/adidasLogo.png" alt="Logo" />
      </div>
      <div className={classes.buttonBlock}>
        <div>
          <HeadderCartButton cartItems={cartItems} cartCount={conuter} />
        </div>
        <div>
          <button type="button">
            <img src="/images/wishlist.svg" alt="wishlist logo" />
            <span>Whishlist</span>
          </button>
        </div>
        <div>
          <button type="button">
            <img src="/images/login.svg" alt="wlogin logo" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
