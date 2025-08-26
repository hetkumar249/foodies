import React from 'react';

const user = {
  name: 'Het Kumar',
  email: 'het@example.com',
  phone: '+91 98765 43210',
  address: '123, Near Railway Station, Surat, Gujarat, India',
  image: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
};

const recentOrders = [
  { item: 'Pizza', date: 'July 7, 2025', status: 'Delivered' },
  { item: 'Cold Coffee', date: 'July 5, 2025', status: 'Delivered' },
  { item: 'Burger Combo', date: 'July 2, 2025', status: 'Cancelled' },
];

const favoriteFoods = [
  {
    name: 'Paneer Tikka',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQIkVXPMRGFuuz8VagzFvLUCGHt4X0vWjYvmr1iT23LSWJvxw4iR-DDCkEhpahJ6i8pM&usqp=CAU',
  },
  {
    name: 'Pizza',
    image: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080',
  },
  {
    name: 'Oreo Shake',
    image: 'https://www.solara.in/cdn/shop/articles/Oreo_Milkshake.jpg?v=1715757748&width=2048',
  },
];

const Profile = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold text-danger mb-5">👤 My Profile</h2>

      <div className="card mb-4 shadow-lg rounded-4 p-3">
        <div className="row align-items-center">
          <div className="col-md-2 text-center">
            <img
              src={user.image}
              className="rounded-circle border border-2"
              alt="User"
              width="100"
              height="100"
            />
          </div>
          <div className="col-md-10">
            <h4 className="fw-bold mb-1">{user.name}</h4>
            <p className="mb-0 text-muted">{user.email}</p>
            <p className="mb-0 text-muted">{user.phone}</p>
          </div>
        </div>
      </div>

      <div className="card mb-4 shadow-sm border-0 p-3 rounded-4">
        <h5 className="fw-semibold mb-2">📍 Delivery Address</h5>
        <p className="text-muted">{user.address}</p>
      </div>

      <div className="card mb-4 shadow-sm border-0 p-3 rounded-4">
        <h5 className="fw-semibold mb-3">🧾 Recent Orders</h5>
        <ul className="list-group">
          {recentOrders.map((order, i) => (
            <li
              key={i}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{order.item}</strong>
                <div className="text-muted small">{order.date}</div>
              </div>
              <span
                className={`badge px-3 py-1 rounded-pill ${
                  order.status === 'Delivered'
                    ? 'bg-success'
                    : 'bg-secondary'
                }`}
              >
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mb-4 shadow-sm border-0 p-3 rounded-4">
        <h5 className="fw-semibold mb-3">❤️ Favorite Foods</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {favoriteFoods.map((food, i) => (
            <div className="col" key={i}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={food.image}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover' }}
                  alt={food.name}
                />
                <div className="card-body text-center">
                  <h6 className="card-title fw-bold">{food.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card shadow-sm border-0 p-4 rounded-4 text-center">
        <h5 className="fw-semibold mb-4">⚙️ Account Settings</h5>
        <div className="d-grid gap-3">
          <button className="btn btn-outline-danger">Edit Profile</button>
          <button className="btn btn-outline-dark">Change Password</button>
          <button className="btn btn-outline-primary">Manage Addresses</button>
          <button className="btn btn-outline-warning">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
