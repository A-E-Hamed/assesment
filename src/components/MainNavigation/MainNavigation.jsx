import HeadderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./MainNavigation.module.scss";

const MainNavigation = ({ cartItems, conuter }) => {
  const { container, searchBar, buttonBlock } = classes;
  return (
    <div className={container}>
      <div className={searchBar}>
        <input type="search" placeholder="Search" />
      </div>
      <div>
        <img src="images/adidasLogo.png" alt="Logo" />
      </div>
      <div className={buttonBlock}>
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
