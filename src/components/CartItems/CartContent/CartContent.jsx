import classes from "./CartContent.module.scss";
const CartContent = ({ onRemoveFromCart, cartItems, cartCount }) => {
  const cartList = cartItems?.map((item, idx) => (
    <div key={++idx} className={classes.mainContainer}>
      <div className={classes.card}>
        <img src={item.image} />
        <div className={classes.itemDetails}>
          <h5>{item.description}</h5>
          <p>Quantity: {cartCount} </p>
          <div>
            <h3>{item.price} LE</h3>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className={classes.totalSection}>
        <h1>Total: 19,999</h1>
        <div className={classes.totalBtn}>
          <button className={classes.firstBtn}>Review Cart</button>
          <button className={classes.secondBtn}>Compelete Checkout</button>
        </div>
      </div>
    </div>
  ));
  console.log(cartItems);
  return <div>{!cartItems ? <p>Your cart is empty.</p> : cartList}</div>;
};

export default CartContent;
