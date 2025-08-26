import React from 'react';

const offers = [
  {
    title: '🔥 Flat 50% Off on First Order',
    desc: 'Enjoy half price on your first meal from FoodZone!',
    image: 'https://www.hancockfashion.com/cdn/shop/collections/FLAT_50_OFF_copy.jpg?v=1486976133',
    code: 'WELCOME50',
  },
  {
    title: '🥤 Free Drink with Burger Combo',
    desc: 'Buy any burger combo and get a cold drink absolutely free!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTY8NRd1iEsb0REVtNUpuz61duTWSy0iRlTA&s',
    code: 'DRINKFREE',
  },
  {
    title: '🎉 ₹200 Cashback on Orders Above ₹799',
    desc: 'Get instant ₹200 cashback on your order above ₹799.',
    image: 'https://www.bigtricks.in/wp-content/uploads/2019/04/Screenshot_982-300x245.jpg',
    code: 'CASH100',
  },
  {
    title: '💰 20% Off on Weekend Orders',
    desc: 'Order on weekends and enjoy 20% discount.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTqs0wwOpGEX8iNzNeNcHGFekqBim1H6b-Q&s',
    code: 'WEEKEND20',
  },
  {
    title: '🍟 Buy 1 Get 1 Free Snacks',
    desc: 'Order your favorite snacks and get one free!',
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-offer-banner-buy-1-get-1-free-design-template-393ac06994495b89de18878f5ebf2288_screen.jpg?ts=1732987238',
    code: 'SNACKSBOGO',
  },
];

const Offers = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/02/87/76/00/360_F_287760066_COBeYwfeWuKtWnM9lm7cDCQESYQIoaNr.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '60px 0',
      }}
    >
     
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#d32f2f' }}>
          🎁 Exclusive FoodZone Offers
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {offers.map((offer, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 border-0 shadow-sm rounded-4"
                style={{
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-5px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              >
                <img
                  src={offer.image}
                  className="card-img-top rounded-top"
                  alt={offer.title}
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{offer.title}</h5>
                  <p className="card-text text-muted">{offer.desc}</p>
                </div>
                <div className="card-footer bg-danger text-light d-flex justify-content-between align-items-center rounded-bottom">
                  <span className="fw-bold">Code: {offer.code}</span>
                  <button
                    className="btn btn-light btn-sm fw-semibold"
                    onClick={() => {
                      navigator.clipboard.writeText(offer.code);
                      alert(`Copied: ${offer.code}`);
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
