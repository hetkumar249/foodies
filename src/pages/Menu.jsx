import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const styles = {
  card: {
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
  },
  img: {
    height: '200px',
    width: '100%',
    objectFit: 'cover',
    borderBottom: '1px solid #eee',
    transition: 'transform 0.3s ease-in-out',
  },
  imgHover: {
    transform: 'scale(1.05)',
  },
  footer: {
    background: 'linear-gradient(to right, #f44336, #ff7043)',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  btn: {
    marginRight: '10px',
    fontWeight: 600,
  },
  favIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.6rem',
    cursor: 'pointer',
    zIndex: 2,
    userSelect: 'none',
  },
};

const allFoodItems = [
  // Snacks (5)
  { name: 'Pizza', desc: 'Delicious cheesy pizza', price: '₹199', image: 'https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080', category: 'Snacks' },
  { name: 'Burger', desc: 'Crispy veg burger', price: '₹99', image: 'https://content.jdmagicbox.com/comp/surat/y8/0261px261.x261.181204212123.l9y8/catalogue/yc-burger-surat-fast-food-inshq4ni0w.jpg', category: 'Snacks' },
  { name: 'French Fries', desc: 'Golden crisp fries', price: '₹79', image: 'https://c.ndtvimg.com/2020-06/m7ngt6ho_french-fries_625x300_18_June_20.jpg', category: 'Snacks' },
  { name: 'Spring Rolls', desc: 'Crispy Asian rolls', price: '₹59', image: 'https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4-500x375.jpg', category: 'Snacks' },
  { name: 'Pav Bhaji', desc: 'Spicy mashed veggies with bun', price: '₹99', image: 'https://headbangerskitchen.com/wp-content/uploads/2024/02/PORKYPAVBHAJI-Horizontal1.jpg', category: 'Snacks' },

  // Drinks (5)
  { name: 'Cold Coffee', desc: 'Chilled iced coffee', price: '₹69', image: 'https://www.cookwithmanali.com/wp-content/uploads/2022/07/Iced-Mocha.jpg', category: 'Drinks' },
  { name: 'Lassi', desc: 'Sweet Punjabi lassi', price: '₹59', image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/06/Lassi-Recipe.jpg', category: 'Drinks' },
  { name: 'Mango Shake', desc: 'Fresh mango milkshake', price: '₹70', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY76rVh39LM46AQfyTqIf2S0oKAPiqtGNA0g&s', category: 'Drinks' },
  { name: 'Oreo Shake', desc: 'Oreo cream shake', price: '₹90', image: 'https://www.solara.in/cdn/shop/articles/Oreo_Milkshake.jpg?v=1715757748&width=2048', category: 'Drinks' },
  { name: 'Lemon Soda', desc: 'Refreshing soda', price: '₹40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMl0VWLXEcQOymmqt8DfdBpo20amZX9Gg1SA&s', category: 'Drinks' },

  // Sweets (5)
  { name: 'Gulab Jamun', desc: 'Soft syrup-soaked balls', price: '₹40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0FosY_2kS4-60tbNhQhna-9HZRv_tEwhmg&s', category: 'Sweets' },
  { name: 'Rasgulla', desc: 'White syrupy sweet', price: '₹35', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1.jpg', category: 'Sweets' },
  { name: 'Jalebi', desc: 'Crispy golden spirals', price: '₹30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAjSDIvbjM-MGTL4ASjhFFAmQgsUvGXpkxw&s', category: 'Sweets' },
  { name: 'Kaju Katli', desc: 'Diamond cashew delight', price: '₹120', image: 'https://www.sweedesi.com/cdn/shop/products/kaju-katli-bhagat-mishthan-bhandar-780831.png?v=1740033711', category: 'Sweets' },
  { name: 'Halwa', desc: 'Classic ghee sweet', price: '₹45', image: 'https://theyummydelights.com/wp-content/uploads/2024/08/gajar-halwa-in-pressure-cooker.jpg', category: 'Sweets' },

  // Punjabi (4)
  { name: 'Paneer Tikka', desc: 'Grilled paneer cubes', price: '₹129', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQIkVXPMRGFuuz8VagzFvLUCGHt4X0vWjYvmr1iT23LSWJvxw4iR-DDCkEhpahJ6i8pM&usqp=CAU', category: 'Punjabi' },
  { name: 'Chole Bhature', desc: 'Spicy chole with fried bhature', price: '₹120', image: 'https://cdn-ekfgf.nitrocdn.com/dkgGRTHyIcwUOyzzGpengYcbXnjQcwtP/assets/images/optimized/rev-7ccd6b9/wp-content/uploads/2021/09/Chana-masala-cutout.jpg', category: 'Punjabi' },
  { name: 'Rajma Chawal', desc: 'Red kidney beans with rice', price: '₹110', image: 'https://images.getrecipekit.com/20230607232917-andy-20cooks-20-20rajma-20chawal.jpg?aspect_ratio=4:3&quality=90&', category: 'Punjabi' },
  { name: 'Shahi Paneer', desc: 'Rich creamy curry', price: '₹149', image: 'https://i0.wp.com/geteasycooking.com/wp-content/uploads/2022/04/EASY-SHAHI-PANEER.00_16_49_21.Still002-1.jpg?fit=1920%2C1080&ssl=1', category: 'Punjabi' },

  // Chinese (4)
  { name: 'Veg Noodles', desc: 'Stir-fried noodles', price: '₹89', image: 'https://www.yummefy.com/uploads/165568ec06.jpg', category: 'Chinese' },
  { name: 'Manchurian', desc: 'Spicy Indo-Chinese delight', price: '₹99', image: 'https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375.jpg', category: 'Chinese' },
  { name: 'Fried Rice', desc: 'Fried rice with veggies', price: '₹85', image: 'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/04/chicken-fried-rice-with-pineapple-1.jpg?crop=16:9&width=1600', category: 'Chinese' },
  { name: 'Chilli Paneer', desc: 'Paneer with Chinese spice', price: '₹119', image: 'https://spicecravings.com/wp-content/uploads/2022/01/Chilli-Paneer-Featured-2.jpg', category: 'Chinese' },
];

const categories = ['All', 'Snacks', 'Drinks', 'Sweets', 'Punjabi', 'Chinese'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hovered, setHovered] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { addToCart } = useCart();

  const handleFavoriteToggle = (itemName) => {
    setFavorites((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const filteredItems =
    selectedCategory === 'All'
      ? allFoodItems
      : allFoodItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold text-danger">🍽️ Explore Our Menu</h2>

      <div className="text-center mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn btn-sm me-2 mb-2 px-3 py-1 ${selectedCategory === cat ? 'btn-danger' : 'btn-outline-danger'
              }`}
            style={styles.btn}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {filteredItems.map((item, index) => (
          <div className="col" key={index}>
            <div
              className="card h-100"
              style={{
                ...styles.card,
                ...(hovered === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                style={styles.favIcon}
                onClick={() => handleFavoriteToggle(item.name)}
              >
                {favorites.includes(item.name) ? '🤣' : '🤍'}
              </span>

              <img
                src={item.image}
                alt={item.name}
                style={{
                  ...styles.img,
                  ...(hovered === index ? styles.imgHover : {}),
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted small">{item.desc}</p>
              </div>
              <div
                style={styles.footer}
                className="d-flex justify-content-between align-items-center"
              >
                <span>{item.price}</span>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => {
                    addToCart(item);
                    alert(`${item.name} added to cart successfully`);
                  }}
                >
                  Add
                </button>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
