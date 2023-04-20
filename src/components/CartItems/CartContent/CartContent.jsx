const CartContent = ({ onRemoveFromCart, cartItems }) => {
  const cartList = cartItems?.map((item, idx) => (
    <div key={++idx}>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
    </div>
  ));
  return <div>{!cartItems ? <p>Your cart is empty.</p> : cartList}</div>;
};

export default CartContent;
