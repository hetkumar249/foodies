import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Login = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723459.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  };

  const cardStyle = {
    maxWidth: '500px',
    width: '100%',
    padding: '40px',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0,0,0,0.15)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '2.2rem',
    marginBottom: '30px',
    color: '#e53935',
    textAlign: 'center',
  };

  const inputIcon = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translateY(-50%)',
    color: '#999',
  };

  const inputBox = {
    paddingLeft: '45px',
    height: '45px',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>🔐 Welcome Back to FoodZone</h2>

        <form>
          <div className="mb-4 position-relative">
            <i className="bi bi-envelope-fill" style={inputIcon}></i>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              style={inputBox}
              required
            />
          </div>

          <div className="mb-4 position-relative">
            <i className="bi bi-lock-fill" style={inputIcon}></i>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              style={inputBox}
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" id="remember" className="form-check-input me-2" />
              <label htmlFor="remember" className="form-check-label">Remember me</label>
            </div>
            <a href="#" className="text-danger text-decoration-none">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-danger w-100 py-2 fw-bold">
            <i className="bi bi-box-arrow-in-right me-2"></i>Login Now
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="mb-2">Or login with</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-primary"><i className="bi bi-facebook me-1"></i> Facebook</button>
            <button className="btn btn-outline-danger"><i className="bi bi-google me-1"></i> Google</button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>Don't have an account? <a href="/register" className="text-danger fw-bold text-decoration-none">Register Now</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
