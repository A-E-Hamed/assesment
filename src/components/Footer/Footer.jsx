import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSection}>
        <div>
          <img src="images/brand-logo-yellow.svg" alt="logo" />
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={classes.rightSection}>
        <div>
          <h2>Subscribe to our newsletter</h2>
        </div>
        <input type="search" placeholder="Enter Your Mail" />
        <div className={classes.linkSection}>
          <div className={classes.linkList}>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>Track order</li>
              <li>Terms & conditions</li>
              <li>Privacy policy</li>
              <li>Sell with us </li>
              <li>Shipping and returns</li>
            </ul>
          </div>
          <div>
            <FooterSocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
