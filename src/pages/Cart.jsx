import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increment, decrement } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-danger">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map((item, i) => (
              <div key={i} className="card mb-3 shadow-sm border-0">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded-start"
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <div className="d-flex align-items-center mb-2">
                        <button onClick={() => decrement(item.name)} className="btn btn-sm btn-outline-danger me-2">−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increment(item.name)} className="btn btn-sm btn-outline-success ms-2">+</button>
                      </div>
                      <p>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                      <button onClick={() => removeFromCart(item.name)} className="btn btn-sm btn-outline-dark">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card p-3 shadow-sm">
              <h5 className="fw-bold">🧾 Bill Summary</h5>
              <p className="d-flex justify-content-between">
                <span>Subtotal:</span> <span>₹{total}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Delivery:</span> <span>₹30</span>
              </p>
              <hr />
              <p className="fw-bold d-flex justify-content-between fs-5">
                <span>Total:</span> <span>₹{total + 30}</span>
              </p>
              <button className="btn btn-danger w-100 mt-2">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
