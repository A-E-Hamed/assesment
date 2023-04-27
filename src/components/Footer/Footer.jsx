import Copyright from "../FooterCopyright/FooterCopyright";
import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks";
import classes from "./Footer.module.scss";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Container from "../Container/Container";
const Footer = () => {
  return (
    <Container>
      <div>
        <div className={classes.mainContainer}>
          <div className={classes.leftSection}>
            <div>
              <img src="images/brand-logo-yellow.svg" alt="logo" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
                <br />
                <br />
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia
                <br />
                <br />m nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit
              </p>
            </div>
          </div>
          <div className={classes.rightSection}>
            <div>
              <h2>Subscribe to our newsletter</h2>
            </div>
            <div className={classes.searchBar}>
              <input type="search" placeholder="Enter Your Mail" />
              <div className={classes.subBtn}>
                Subscribe <IoPaperPlaneOutline size={20} />
              </div>
            </div>
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
        <Copyright />
      </div>
    </Container>
  );
};

export default Footer;
