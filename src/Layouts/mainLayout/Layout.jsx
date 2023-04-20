import React, { Component } from "react";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import CategoriesNavigation from "../../components/CategoriesNavigation/CategoriesNavigation";
import SimilarSection from "../../components/SimilarSection/SimilarSection";
import { footerContainer } from "./Layout.module.scss";
import Footer from "../../components/Footer/Footer";
import Home from "../../pages/Home";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }
  state = {
    quantity: 1,
    products: [
      {
        id: "P1",
        name: "Adidas Shirt",
        description:
          "Adidas Black shirt Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: "9999 LE",
        image: "/images/shirt1.jpg",
      },
    ],
    cartItems: [],
    cartTotal: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItems !== this.state.cartItems) {
      const cartTotal = this.state.quantity + prevState.cartTotal;
      this.setState({ cartTotal });
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
    }));
  };

  handleDecrement = () => {
    if (this.state.quantity === 0) return;
    this.setState((prevState) => ({
      ...prevState,
      quantity: prevState.quantity - 1,
    }));
  };

  addToCartHandler(item) {
    const existingItemIndex = this.state.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      this.setState((prevState) => {
        const cartItems = [...prevState.cartItems];
        cartItems[existingItemIndex].quantity += this.state.quantity;
        return { cartItems };
      });
    } else {
      this.setState((prevState) => ({
        ...prevState,
        cartItems: [
          ...prevState.cartItems,
          { ...item, quantity: this.state.quantity },
        ],
      }));
    }
  }

  render() {
    return (
      <>
        <MainNavigation
          cartItems={this.state.cartItems}
          conuter={this.state.cartTotal}
        />
        <CategoriesNavigation />
        <Home
          productItem={this.state.products}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          addToCartHandler={this.addToCartHandler}
          quantity={this.state.quantity}
        />
        <hr />
        <SimilarSection />
        <div className={footerContainer}>
          <Footer />
        </div>
      </>
    );
  }
}
export default Layout;
