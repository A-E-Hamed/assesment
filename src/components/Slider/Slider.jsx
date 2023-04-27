import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselSlider.module.scss";

const Slider = () => {
  return (
    <div className={classes.test}>
      <Carousel style={"height:400px"}>
        <div>
          <img src="images/shirt1.png" alt="shirt" width="40px" />
        </div>
        <div>
          <img src="images/shirt2.png" alt="shirt" />
        </div>
        <div>
          <img src="images/shirt3.png" alt="shirt" />
        </div>
        <div>
          <img src="images/shirt4.png" alt="shirt" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
