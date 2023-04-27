import React, { Component } from "react";
import Modal from "../Modal/Modal";
import CartItems from "../CartItems/CartItems";
import { MdOutlineShoppingBasket } from "react-icons/md";
import classes from "../MainNavigation/MainNavigation.module.scss";

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
          <div className={classes.cartIconWrapper}>
            <MdOutlineShoppingBasket size={25} />
            <span className={classes.cartCounter}>{cartCount}</span>
          </div>
          <span>Cart</span>
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
