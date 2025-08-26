import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const foodItems = [
  { name: 'Pizza', desc: 'Delicious cheesy pizza', price: '₹199', image: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080', category: 'Snacks' },
  { name: 'Burger', desc: 'Crispy veg burger', price: '₹99', image: 'https://content.jdmagicbox.com/comp/surat/y8/0261px261.x261.181204212123.l9y8/catalogue/yc-burger-surat-fast-food-inshq4ni0w.jpg', category: 'Snacks' },
  { name: 'Cold Coffee', desc: 'Chilled iced coffee', price: '₹69', image: 'https://www.cookwithmanali.com/wp-content/uploads/2022/07/Iced-Mocha.jpg', category: 'Drinks' },
  { name: 'Rasgulla', desc: 'White syrupy sweet', price: '₹35', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1.jpg', category: 'Sweets' },
  { name: 'Paneer Tikka', desc: 'Grilled paneer cubes', price: '₹129', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQIkVXPMRGFuuz8VagzFvLUCGHt4X0vWjYvmr1iT23LSWJvxw4iR-DDCkEhpahJ6i8pM&usqp=CAU', category: 'Punjabi' },
  { name: 'Veg Noodles', desc: 'Stir-fried noodles', price: '₹89', image: 'https://www.yummefy.com/uploads/165568ec06.jpg', category: 'Chinese' },
];

const categories = ['All', 'Snacks', 'Drinks', 'Sweets', 'Punjabi', 'Chinese'];

const Home = () => {
  const navigate = useNavigate();
  const banners = [
    "https://images.hollandandbarrettimages.co.uk/health-hub/2023/M08/foods-rich-in-iron.png",
    "https://i.pinimg.com/originals/6e/58/1f/6e581fb70982e576c488457628c72604.jpg",
    "https://assets.box8.co.in/rectangle-19x10/xxhdpi/product/5007"
  ];

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    wrapper: {
      backgroundImage: `url(${banners[bannerIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      color: '#fff',
      transition: 'background-image 1s ease-in-out'
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding: '60px',
      borderRadius: '20px',
      maxWidth: '1100px',
      width: '100%',
      boxShadow: '0 0 30px rgba(0,0,0,0.4)',
    },
    headline: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      color: '#FF9800',
      marginBottom: '20px',
    },
    subtext: {
      fontSize: '1.25rem',
      marginBottom: '30px',
      lineHeight: '1.8',
      color: '#eee',
    },
    badgesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '30px',
    },
    badge: {
      background: '#E53935',
      padding: '8px 16px',
      borderRadius: '30px',
      fontSize: '0.95rem',
      fontWeight: '500',
    },
    buttonsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginTop: '20px',
    },
    buttonPrimary: {
      backgroundColor: '#FFC107',
      color: '#000',
      padding: '12px 28px',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
    },
    buttonOutline: {
      backgroundColor: 'transparent',
      border: '2px solid #fff',
      color: '#fff',
      padding: '12px 28px',
      fontSize: '1.1rem',
      borderRadius: '8px',
      cursor: 'pointer',
    }
  };

  return (
    <div>
      <div style={styles.wrapper}>
        <div style={styles.overlay}>
          <h1 style={styles.headline}>🍱 Welcome to FoodZone</h1>
          <p style={styles.subtext}>
            Craving something delicious? We bring you piping hot meals from your
            favorite local kitchens to your doorstep. Fast delivery, tasty combos,
            amazing offers & much more!
          </p>

          <div style={styles.badgesContainer}>
            <span style={styles.badge}>🔥 50% OFF First Order</span>
            <span style={styles.badge}>⏱️ 30-Min Delivery</span>
            <span style={styles.badge}>⭐ 4.8/5 Rating</span>
            <span style={styles.badge}>🚚 Free Delivery Over ₹399</span>
          </div>

          <div style={styles.buttonsContainer}>
            <button
              style={styles.buttonPrimary}
              onClick={() => navigate('/menu')}
            >
              Explore Menu 🍽️
            </button>
            <button style={styles.buttonOutline}>View Offers 🏱</button>
          </div>
        </div>
      </div>

      <FoodCategories items={foodItems} />
      <OffersSection />
      <Testimonials />
      <Footer />
    </div>
  );
};
const FoodCategories = () => {
  const categories = [
    { name: 'Pizzas', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg' },
    { name: 'Biryani', image: 'https://stackeatfoods.com/wp-content/uploads/2024/01/33_Veg._biryani.png' },
    { name: 'Shake', image: 'https://www.vitamix.com/content/dam/vitamix/migration/media/recipe/rcpchocolateshake/images/chocolatemilkshakemainjpg.jpg' },
    { name: 'Chinese', image: 'https://blog.swiggy.com/wp-content/uploads/2024/09/Image-3_Chilli-Chicken-1024x538.png' },
    { name: 'Pakoda', image: 'https://www.kuchpakrahahai.in/wp-content/uploads/2015/07/Moong-Dal-Pakoda-Air-fryer.jpg' },
    { name: 'Noodles', image: 'https://www.ohmyveg.co.uk/wp-content/uploads/2024/10/paneer-hakka-noodles.jpg' },
    { name: 'Lassi', image: 'https://mithaiandmore.in/cdn/shop/products/L00004_rajwadi-lassi_1080x.jpg?v=1628753217' },
  ];

  const styles = {
    section: {
      padding: '60px 20px',
      backgroundColor: '#fff',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: '#d32f2f',
      marginBottom: '40px',
    },
    scrollContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
    },
    categoryItem: {
      width: '110px',
      textAlign: 'center',
    },
    imageWrapper: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto 10px',
      border: '3px solid #ff7043',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    name: {
      fontWeight: '500',
      fontSize: '1rem',
      color: '#333',
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.title}>🍲 What's on your mind?</h2>
      <div style={styles.scrollContainer}>
        {categories.map((cat, idx) => (
          <div key={idx} style={styles.categoryItem}>
            <div style={styles.imageWrapper}>
              <img src={cat.image} alt={cat.name} style={styles.image} />
            </div>
            <div style={styles.name}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OffersSection = () => {
  const offers = [
    {
      image: 'https://img.freepik.com/premium-vector/flat-discount-banner-with-3d-burger-french-fries_52683-63836.jpg',
      title: 'Get Flat ₹100 OFF on Burgers',
    },
    {
      image: 'https://img.freepik.com/free-psd/delicious-pizza-food-banner-template_120329-1526.jpg',
      title: 'Pizza Combo @ ₹249 Only!',
    },
    {
      image: 'https://img.freepik.com/free-psd/food-menu-restaurant-social-media-post-banner-template_202595-444.jpg',
      title: 'Dinner Delight - Up to 60% OFF',
    },
    {
      image: 'https://img.freepik.com/free-psd/delicious-food-social-media-promotion-banner-template_202595-239.jpg',
      title: 'Free Dessert with Every ₹499+ Order',
    },
    {
      image: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080',
      title: 'Weekend Feast - ₹150 Cashback',
    },
    {
      image: 'https://img.freepik.com/free-psd/restaurant-menu-delicious-food-web-banner-template_106176-1420.jpg',
      title: 'Lunch Combos from ₹99',
    },
  ];

  return (
    <div style={{ backgroundColor: '#fff3e0', padding: '100px 30px' }}>
      <h2 className="text-center fw-bold mb-5 display-4 text-warning">🎁 Special Offers Just for You</h2>
      <div className="container-lg">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {offers.map((offer, idx) => (
            <div className="col" key={idx}>
              <div
                className="offer-card"
                style={{
                  background: '#fff',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '12px',
                    marginBottom: '20px',
                  }}
                />
                <p style={{ fontWeight: '700', fontSize: '1.2rem', color: '#ff5722', textAlign: 'center' }}>
                  {offer.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const Testimonials = () => (
  <div style={{ backgroundColor: '#fce4ec', padding: '100px 30px' }}>
    <h2 className="text-center fw-bold text-danger mb-5 display-4">💬 What Our Customers Say</h2>
    <div className="container-lg">
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {[
          {
            name: "Priya Sharma",
            location: "Mumbai",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            quote:
              "FoodZone is my go-to! Quick, tasty, and reliable. Highly recommend to anyone craving delicious food on time!",
          },
          {
            name: "Rohit Mehta",
            location: "Delhi",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            quote:
              "Absolutely love the quality and taste. The delivery is always on point and the offers are just a cherry on top.",
          },
          {
            name: "Anjali Verma",
            location: "Bengaluru",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            quote:
              "Great variety of food options and user-friendly platform. I’ve been ordering for months and never disappointed!",
          },
          {
            name: "Amit Joshi",
            location: "Pune",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            quote:
              "Fast delivery and excellent taste. Their combos are budget-friendly and super filling.",
          },
          {
            name: "Neha Patel",
            location: "Ahmedabad",
            image: "https://randomuser.me/api/portraits/women/55.jpg",
            quote:
              "FoodZone makes life easier for working moms like me. Healthy options and timely delivery are lifesavers!",
          },
          {
            name: "Karan Singh",
            location: "Chandigarh",
            image: "https://randomuser.me/api/portraits/men/51.jpg",
            quote:
              "I’ve tried many food apps, but FoodZone’s user experience and food quality stand out. Five stars from me!",
          },
        ].map((testimonial, index) => (
          <div className="col" key={index}>
            <div className="card shadow-lg p-4 h-100 text-center border-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  border: "3px solid #dc3545",
                }}
              />
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.75",
                  color: "#444",
                }}
              >
                "{testimonial.quote}"
              </p>
              <strong className="text-danger mt-4 d-block">
               {testimonial.name}, {testimonial.location}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);



const Footer = () => (
  <footer style={{ backgroundColor: '#212121', color: '#fff', padding: '40px 20px' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4>🍱 FoodZone</h4>
          <p>Your go-to destination for delicious meals and great offers.</p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" style={{ color: '#fff' }}>Home</a></li>
            <li><a href="#" style={{ color: '#fff' }}>Menu</a></li>
            <li><a href="#" style={{ color: '#fff' }}>Offers</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>Email: support@foodzone.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="text-center mt-3">&copy; 2025 FoodZone. All rights reserved.</div>
    </div>
  </footer>
);

export default Home;
