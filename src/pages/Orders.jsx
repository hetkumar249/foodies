import React from 'react';

const orders = [
  {
    id: 'ORD12345',
    items: ['Pizza', 'Cold Coffee'],
    total: '₹268',
    status: 'Delivered',
    image: 'https://www.shutterstock.com/image-photo/fast-food-delivery-service-concept-600nw-1914252415.jpg',
  },
  {
    id: 'ORD12346',
    items: ['Paneer Tikka', 'Lassi'],
    total: '₹188',
    status: 'On the Way',
    image: 'https://img.freepik.com/free-photo/scooter-delivery-man-mask-food-box_1150-28543.jpg?w=740&t=st=1719983660~exp=1719984260~hmac=06aeab5bd631ef8b869ea700dbf3381e4fbe57eb4c60abcc5793fd92b3cf5a64',
  },
];

const userInfo = {
  name: 'Het Kumar',
  address: '123, Gandhi Road, Ahmedabad, Gujarat - 380001',
  phone: '+91 98765 43210',
};

const Orders = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">📦 Your Orders</h2>

      <div className="bg-light p-4 rounded mb-5 shadow-sm">
        <h5 className="mb-2 fw-semibold">🚚 Delivery Info</h5>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Address:</strong> {userInfo.address}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {orders.map((order, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img
                src={order.image}
                alt="Order"
                className="card-img-top rounded-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Order ID: {order.id}</h5>
                <p><strong>Items:</strong> {order.items.join(', ')}</p>
                <p><strong>Total:</strong> {order.total}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center bg-success text-white">
                <span>Status: {order.status}</span>
                <button className="btn btn-sm btn-light">Track</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
