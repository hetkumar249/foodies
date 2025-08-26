import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Login from './pages/Login';
import Register from './pages/Register';
import { CartProvider } from './context/CartContext';



function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        {/* Optional Pages to prevent white screen */}
        <Route path="/offers" element={<Offers />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/offers" element={<h2 className="text-center mt-5">🔥 Offers Page</h2>} />
        <Route path="/favorites" element={<h2 className="text-center mt-5">⭐ Favorites Page</h2>} />
        <Route path="/orders" element={<h2 className="text-center mt-5">🧾 Orders Page</h2>} />
        <Route path="/profile" element={<h2 className="text-center mt-5">👤 Profile Page</h2>} />
        <Route path="/about" element={<h2 className="text-center mt-5">📖 About Us Page</h2>} />
        <Route path="/contact" element={<h2 className="text-center mt-5">📞 Contact Page</h2>} />
        <Route path="/help" element={<h2 className="text-center mt-5">🆘 Help Page</h2>} />
        <Route path="/login" element={<h2 className="text-center mt-5">🔐 Login Page</h2>} />
        <Route path="/register" element={<h2 className="text-center mt-5">📝 Register Page</h2>} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
