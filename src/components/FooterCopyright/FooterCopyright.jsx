import classes from "./FooterCopyrights.module.scss";
const Copyright = () => {
  return (
    <div className={classes.mainContainer}>
      <span>
        <p>© 2023 yeshtery, all rights reserved.</p>
      </span>

      <span>
        <img src="images/cash.png" alt="cash" />
        <img src="images/visa.png" alt="visa" />
        <img src="images/mastercard.png" alt="mastercard" />
      </span>
      <span>
        <p>Powered By</p>
        <img src="images/nas_nav.svg" />
      </span>
    </div>
  );
};

export default Copyright;
