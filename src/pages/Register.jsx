import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Register = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/delicious-food-table_23-2150694625.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
  };

  const cardStyle = {
    maxWidth: '600px',
    width: '100%',
    padding: '40px',
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: '20px',
    boxShadow: '0 0 25px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '2.2rem',
    marginBottom: '30px',
    color: '#d32f2f',
    textAlign: 'center',
  };

  const inputIcon = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    transform: 'translateY(-50%)',
    color: '#888',
  };

  const inputBox = {
    paddingLeft: '45px',
    height: '45px',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>📝 Create Your Account</h2>

        <form>
          <div className="mb-3 position-relative">
            <i className="bi bi-person-fill" style={inputIcon}></i>
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              style={inputBox}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="bi bi-envelope-fill" style={inputIcon}></i>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              style={inputBox}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="bi bi-lock-fill" style={inputIcon}></i>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              style={inputBox}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <i className="bi bi-lock" style={inputIcon}></i>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              style={inputBox}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Gender:</label>
            <div className="form-check form-check-inline ms-2">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>

          <div className="mb-3">
            <input type="checkbox" className="form-check-input me-2" id="terms" required />
            <label htmlFor="terms" className="form-check-label">
              I agree to the <a href="#" className="text-danger fw-bold">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-danger w-100 fw-bold py-2">
            <i className="bi bi-person-plus me-2"></i>Register Now
          </button>
        </form>

        <div className="text-center mt-4">
          <p>Or sign up using</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-primary"><i className="bi bi-facebook me-1"></i> Facebook</button>
            <button className="btn btn-outline-danger"><i className="bi bi-google me-1"></i> Google</button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>Already have an account? <a href="/login" className="fw-bold text-danger text-decoration-none">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
