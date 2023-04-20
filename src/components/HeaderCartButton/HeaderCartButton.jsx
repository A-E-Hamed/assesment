import React, { Component } from "react";
import Modal from "../Modal/Modal";
import CartItems from "../CartItems/CartItems";


class HeadderCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleCart = this.toggleCart.bind(this);
  }

  toggleCart() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { cartCount, cartItems } = this.props;
    return (
      <div>
        <button onClick={this.toggleCart}>
          <img src="/images/cart.svg" alt="cart logo" />
          <span>Cart</span>
          <span>{cartCount}</span>
        </button>
        {this.state.isOpen && (
          <Modal>
            <CartItems cartItems={cartItems} onClose={this.toggleCart} />
          </Modal>
        )}
      </div>
    );
  }
}

export default HeadderCartButton;
