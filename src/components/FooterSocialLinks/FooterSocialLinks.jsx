import classes from "./FooterSocialLinks.module.scss";

const FooterSocialLinks = () => {
  const { socialMediaLinks } = classes;
  return (
    <div className={socialMediaLinks}>
      <ul>
        <li>
          <div>
            <img src="../images/facebook@2x.png" alt="facebook logo" />
          </div>
          <a href="https://www.facebook.com/yeshtery/">Facebook</a>
        </li>
        <li>
          <div>
            <img src="../images/instagram@2x.png" alt="Instagram logo" />
          </div>
          <a href="https://www.instagram.com/yeshtery/">Instagram</a>
        </li>
        <li>
          <div>
            <img src="../images/youtube@2x.png" alt="Youtube logo" />
          </div>
          <a href="https://www.youtube.com/watch?v=mq_jIbwjrYQ&feature=youtu.be">
            Youtube
          </a>
        </li>
        <li>
          <div>
            <img src="../images/linkedin@2x.png" alt="Linkedin logo" />
          </div>
          <a href="https://www.linkedin.com/company/yeshtery">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocialLinks;
