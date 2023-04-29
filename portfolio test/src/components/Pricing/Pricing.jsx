import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <div className="pricing-container">
        <div className="card">
          <h4>- Basic -</h4>
          <span className="bar"></span>
          <h2>$ 100</h2>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h4>- Premium -</h4>
          <span className="bar"></span>
          <h2>$ 200</h2>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h4>- Business -</h4>
          <span className="bar"></span>
          <h2>$ 300</h2>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
