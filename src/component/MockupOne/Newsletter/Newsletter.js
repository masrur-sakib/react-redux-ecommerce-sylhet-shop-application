import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <div className="container newsletter-section">
        <div className="newsletter-left-section">
          <h1 className="newsletter-section-tagline">Newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            debitis aspernatur soluta natus molestiae excepturi, deserunt
            ratione voluptate inventore perferendis.
          </p>
        </div>
        <div className="newsletter-right-section">
          <form className="row g-3 newsletter-form">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                aria-label="Email Address"
              ></input>
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-secondary subscribe-button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
