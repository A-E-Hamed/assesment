import React from "react";
import CartContent from "./CartContent/CartContent";
import classes from "./CartItems.module.scss";
import { IoCloseOutline } from "react-icons/io5";
class CartItems extends React.Component {
  render() {
    const { cartItems, cartCount } = this.props;
    return (
      <div className={classes.mainContainer}>
      <button onClick={this.props.onClose} className={classes.closeBtn}>
          <IoCloseOutline size={30} />
        </button>
        <h1>My Cart</h1>
        <div>
          <h2>Cart Summary</h2>
          <CartContent cartItems={cartItems} cartCount={cartCount} />
        </div>
        
      </div>
    );
  }
}

export default CartItems;
