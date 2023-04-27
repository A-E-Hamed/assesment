import Container from "../Container/Container";
import classes from "./BreadCrumb.module.scss";
const BreadCrumb = () => {
  return (
    <div className={classes.mainContainer}>
      <Container>
        <div className={classes.BreadCrumbContainer}>
          <p>Men</p>
          <span>/</span>
          <p>Clothing</p>
          <span>/</span>
          <p>Tops</p>
          <span>/</span>
          <p>Adidas</p>
          <span>/</span>
          <p className={classes.prodName}>Adidas Black T-Shirt</p>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
