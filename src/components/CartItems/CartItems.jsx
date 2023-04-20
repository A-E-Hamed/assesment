import React from "react";
import CartContent from "./CartContent/CartContent";
class CartItems extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
          <h2>Cart</h2>
          <CartContent cartItems={cartItems} />
        </div>
        <button onClick={this.props.onClose}>CLose</button>
      </div>
    );
  }
}

export default CartItems;
