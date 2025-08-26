import React from 'react';

const favoriteItems = [
  {
    name: 'Pizza',
    desc: 'Delicious cheesy pizza',
    image: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080',
  },
  {
    name: 'Cold Coffee',
    desc: 'Royal sweet dessert drink',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2022/07/Iced-Mocha.jpg',
  },
  {
    name: 'Paneer Tikka',
    desc: 'Spicy grilled paneer cubes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQIkVXPMRGFuuz8VagzFvLUCGHt4X0vWjYvmr1iT23LSWJvxw4iR-DDCkEhpahJ6i8pM&usqp=CAU',
  },
  {
    name: 'Burger',
    desc: 'Crispy loaded veg burger',
    image: 'https://content.jdmagicbox.com/comp/surat/y8/0261px261.x261.181204212123.l9y8/catalogue/yc-burger-surat-fast-food-inshq4ni0w.jpg',
  },
];

const backgroundStyle = {
  backgroundImage: `url('https://t3.ftcdn.net/jpg/02/87/76/00/360_F_287760066_COBeYwfeWuKtWnM9lm7cDCQESYQIoaNr.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  padding: '60px 0',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
};

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.75)',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease',
};

const Favorites = () => {
  return (
    <div style={backgroundStyle}>
      <div className="container">
        <h2 className="text-center text-danger fw-bold mb-5 display-5">⭐ Your Favorite Foods</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {favoriteItems.map((item, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 p-2"
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top rounded"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">{item.name}</h4>
                  <p className="card-text text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
