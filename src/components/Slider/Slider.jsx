import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./CarouselSlider.module.scss";

const Slider = () => {
  return (
    <Carousel className={classes.test}>
      <div>
        <img src="images/shirt1.jpg" alt="shirt" width="40px" />
      </div>
      <div>
        <img src="images/shirt2.jpg" alt="shirt" />
      </div>
      <div>
        <img src="images/shirt3.jpg" alt="shirt" />
      </div>
      <div>
        <img src="images/shirt4.jpg" alt="shirt" />
      </div>
      <div>
        <img src="images/shirt5.jpg" alt="shirt" />
      </div>
      <div>
        <img src="images/shirt6.jpg" alt="shirt" />
      </div>
    </Carousel>
  );
};

export default Slider;
