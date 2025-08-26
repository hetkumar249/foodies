import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid p-0">

      <div
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '2px 2px 8px black',
        }}
      >
        <h1 className="display-4 fw-bold text-center">📞 Contact Us</h1>
      </div>

      <div className="container py-5">
        <h2 className="text-center fw-bold text-danger mb-4">Reach Out to Us</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="shadow-sm p-4 bg-light rounded-4 h-100">
              <h5 className="fw-bold mb-2">📍 Address</h5>
              <p className="text-muted mb-0">FoodZone HQ, Main Road, Ahmedabad, Gujarat, India</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-sm p-4 bg-light rounded-4 h-100">
              <h5 className="fw-bold mb-2">📱 Phone</h5>
              <p className="text-muted mb-0">+91 98765 43210</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="shadow-sm p-4 bg-light rounded-4 h-100">
              <h5 className="fw-bold mb-2">📧 Email</h5>
              <p className="text-muted mb-0">support@foodzone.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <h3 className="text-center fw-bold text-dark mb-4">Send Us a Message</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form className="p-4 shadow-sm bg-white rounded-4">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name</label>
                  <input type="text" className="form-control" placeholder="Your full name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Phone</label>
                  <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-danger px-4 fw-bold">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 mt-5">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.295537650006!2d72.5713627!3d23.0225054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7c778f2d9%3A0xd08ef93f9ac4c0a!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1629283963204!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="bg-dark text-light py-4">
        <div className="container text-center">
          <h5 className="fw-bold">Connect with us</h5>
          <div className="d-flex justify-content-center gap-3 mt-3 fs-4">
            <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
