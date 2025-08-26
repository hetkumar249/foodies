import React from 'react';

const Help = () => {
  return (
    <div className="container my-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger display-5">🆘 Help & Support</h1>
        <p className="text-muted fs-5">Need assistance? We’re here to help you 24/7!</p>
      </div>

      <div className="mb-5">
        <h4 className="fw-bold mb-4">Frequently Asked Questions</h4>
        <div className="accordion" id="faqAccordion">

          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                How do I track my order?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show">
              <div className="accordion-body text-muted">
                Go to your profile & click on “My Orders” to view real-time order status.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                Can I cancel or modify an order?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse">
              <div className="accordion-body text-muted">
                Yes, but only within 5 minutes of placing it. Go to “My Orders” → Cancel.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                How do I apply coupon codes?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse">
              <div className="accordion-body text-muted">
                Add items to cart → go to checkout → apply the coupon in the “Promo Code” field.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                What if I received the wrong or cold food?
              </button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse">
              <div className="accordion-body text-muted">
                Contact our support immediately via chat or call. Refund/replacement will be issued.
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="row text-center g-4 mb-5">
        <div className="col-md-4">
          <div className="p-4 shadow-sm bg-light rounded-4 h-100">
            <h5 className="fw-bold mb-2">📞 Call Us</h5>
            <p className="text-muted mb-0">+91 98765 43210 (24x7)</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm bg-light rounded-4 h-100">
            <h5 className="fw-bold mb-2">💬 Chat Support</h5>
            <p className="text-muted mb-0">Live chat via your account panel</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm bg-light rounded-4 h-100">
            <h5 className="fw-bold mb-2">📧 Email Us</h5>
            <p className="text-muted mb-0">help@foodzone.in</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h5 className="mb-3">Still facing issues?</h5>
        <button className="btn btn-danger px-4 fw-bold">Contact Our Support Team</button>
      </div>
    </div>
  );
};

export default Help;
