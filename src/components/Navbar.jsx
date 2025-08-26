import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  return (
    <>
    


      <div className="bg-dark text-light py-2 px-4 d-flex justify-content-between align-items-center small">
        <div>
          <i className="bi bi-telephone me-2 text-warning"></i> +91 98765 43210
          <span className="ms-3">
            <i className="bi bi-envelope me-2 text-warning"></i> support@foodzone.com
          </span>
        </div>
        <div>
          <Link to="/login" className="text-light me-3 text-decoration-none">

            <i className="bi bi-box-arrow-in-right me-1 text-info"></i> Login
          </Link>


          <Link to="/register" className="text-light text-decoration-none">
            <i className="bi bi-person-plus-fill me-1 text-info"></i> Register
          </Link>
        </div>
      </div>




      <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4 py-3 shadow sticky-top">
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          <i className="bi bi-egg-fried me-2"></i>FoodZone
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 gap-lg-2">
            {[
              { to: "/", icon: "house-door", label: "Home" },

              { to: "/menu", icon: "list-ul", label: "Menu" },
              { to: "/offers", icon: "tags", label: "Offers" },
              { to: "/favorites", icon: "star", label: "Favorites" },

              { to: "/orders", icon: "receipt", label: "Orders" },
              { to: "/cart", icon: "cart-check", label: "Cart" },
              { to: "/profile", icon: "person", label: "Profile" }
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link fw-semibold text-light" to={item.to}>
               <i className={`bi bi-${item.icon} me-1`}></i> {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
              href="#"
                id="moreDropdown"
             role="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-three-dots"></i> More
              </a>
              <ul className="dropdown-menu dropdown-menu-end rounded-3 shadow-sm">
            <li>
                <Link className="dropdown-item" to="/about">About Us</Link>
               </li>
                <li>
                 <Link className="dropdown-item" to="/contact">Contact</Link>
                </li>
             <li><hr className="dropdown-divider" /></li>
                <li>
                <Link className="dropdown-item" to="/help">Help & Support</Link>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 rounded-pill px-3"
              type="search"
              placeholder="Search food..."
              aria-label="Search"
            />
            <button className="btn btn-light rounded-pill px-3" type="submit">
              <i className="bi bi-search text-danger"></i>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
