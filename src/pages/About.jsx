import React from 'react';

const About = () => {
  return (
    <div className="container-fluid p-0">

      <div
        style={{
          backgroundImage: 'url("https://cdn.vectorstock.com/i/1000v/39/30/original-fast-food-restaurant-banner-vector-45373930.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '2px 2px 8px #000',
        }}
      >
        <h1 className="display-3 fw-bold text-center">About FoodZone</h1>
      </div>

      <div className="container py-5">
        <h2 className="text-danger fw-bold mb-4 text-center">🍽️ Our Story</h2>
        <p className="lead text-muted text-center mx-auto" style={{ maxWidth: '800px' }}>
          At FoodZone, we believe that food is not just about taste, it's an experience! Founded in 2023, our journey started with a small team and big dreams to bring premium quality food to everyone’s doorstep. With dedication, flavor, and a sprinkle of innovation, we grew into one of the fastest-growing online food brands.
        </p>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4 fw-bold text-dark">🍕 Why Choose FoodZone?</h3>
          <div className="row text-center">
            {[
              { icon: '🚀', title: 'Fast Delivery', desc: 'Get your food in 30 minutes or less.' },
              { icon: '🥗', title: 'Fresh Ingredients', desc: 'Every meal is made with 100% fresh ingredients.' },
              { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Our team consists of culinary masters.' },
              { icon: '💰', title: 'Affordable Prices', desc: 'Delicious food that doesn’t break the bank.' },
              { icon: '📦', title: 'Safe Packaging', desc: 'Food arrives hot, fresh, and safely packed.' },
            ].map((item, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="shadow-sm p-4 bg-white rounded-4 h-100">
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h3 className="text-center fw-bold mb-5 text-danger">👨‍👩‍👧 Meet Our Team</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            { name: 'Het Kumar', role: 'Founder & CEO', img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
            { name: 'Ananya Shah', role: 'Head Chef', img: 'https://cdn-icons-png.flaticon.com/512/2922/2922656.png' },
            { name: 'Rahul Patel', role: 'Operations Manager', img: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
          ].map((member, i) => (
            <div className="col" key={i}>
              <div className="card h-100 text-center p-3 shadow-sm border-0">
                <img src={member.img} alt={member.name} className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
                <div className="card-body">
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-danger text-light py-5">
        <div className="container">
          <h3 className="text-center mb-4 fw-bold">💬 What Our Customers Say</h3>
          <div className="row text-center">
            {[
              {
                name: 'Priya Mehta',
                quote: 'The food is always fresh and delivery is super quick. Love the app experience!',
              },
              {
                name: 'Amit Verma',
                quote: 'Great taste, excellent service and affordable prices. Highly recommended!',
              },
              {
                name: 'Sneha Joshi',
                quote: 'Best online food ordering service I’ve ever used. UI is smooth and intuitive.',
              },
            ].map((review, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="bg-white text-dark rounded-4 p-4 shadow-sm h-100">
                  <p className="fst-italic">“{review.quote}”</p>
                  <h6 className="fw-bold mt-3">{review.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h3 className="text-center mb-4 text-danger fw-bold">🎯 Our Mission & Vision</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 shadow-sm rounded-4 bg-white h-100">
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted">
                To bring high-quality, hygienic and affordable food to every doorstep in India, while delivering a seamless online ordering experience.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 shadow-sm rounded-4 bg-white h-100">
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-muted">
                To become India’s leading and most loved online food delivery brand, recognized for quality, consistency, and care.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
