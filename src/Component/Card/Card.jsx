import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card-main-container">
        <div className="card-row row m-0"  >
          <div className="card-col-first col-lg-6 col-md-6 col-sm-12" >
              <h2>About Qubicle</h2>
          <p> We’re west coast change-makers, in a complex world. The brands we
            support are positioned to be purposeful and powerful while also
            fluid and free-forming.</p> <p>We’re embracers of change. When we drive the
            change, a brand can connect with its audience, captivate the hearts
            and minds of customers, and convert cross-channel.</p>
          </div>
          <div className="card-col-second col-lg-6 col-md-6 col-sm-12">
            <div className="card-faces"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
