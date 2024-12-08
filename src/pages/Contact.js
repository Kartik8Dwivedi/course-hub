import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h3 className="text-center mb-4">Contact Us</h3>
        <div className="card mx-auto shadow-sm" style={{ maxWidth: "600px" }}>
          <div className="card-body text-center">
            <h5 className="card-title">Reach Out to Us</h5>
            <p className="card-text">
              We're here to help! Contact us using the information below.
            </p>
            <ul className="list-unstyled mb-3">
              <li>
                <strong>Email:</strong> support@log2base2clone.com
              </li>
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Address:</strong> 123 Tech Park, Sector 17, Cityville, India
              </li>
            </ul>
            <a href="mailto:support@log2base2clone.com" className="btn btn-primary">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
