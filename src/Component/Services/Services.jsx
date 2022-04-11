import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Services.css";

export const Services = () => {
  return (
    <div>
      <div className="service-main-container">
        <div className="service-heading-container">
          <div className="service-heading">
            <h2>We Specialize in</h2>

            <FaLongArrowAltRight className="arrow-icon" />
          </div>

          <div className="row m-0 card-cont">
            <div className="col   col-lg-4 col-mg-6 col-sm-12 col-xm-12">
              <div class="card card-custom" >
                <div class="card-body">
                  <h4 class="card-title card-title-cont">Web Development</h4>
                  <p class="card-text card-text-cont">
                  Editing, writing, or designing Website content, and directing team members who produce content.
                  </p>
                  <a href="#" class="btn btn-outline-primary btn-cont">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col   col-lg-4 col-mg-6 col-sm-12 col-xm-12">
              <div class="card card-custom" >
                <div class="card-body">
                  <h4 class="card-title card-title-cont">App Development</h4>
                  <p class="card-text card-text-cont">
                  Build Progressive Web Apps that combine the best technical solutions applied in mobile and web applications beneficial in terms of the ease of development and distribution, as well as a number of other advantages for your business. Talk to our experts to discuss:
                  </p>
                  <a href="#" class="btn btn-outline-primary btn-cont">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col   col-lg-4 col-mg-6 col-sm-12 col-xm-12">
              <div class="card card-custom" >
                <div class="card-body">
                  <h4 class="card-title card-title-cont">Backened Management</h4>
                  <p class="card-text card-text-cont">
                  Backend-as-a-Service (BaaS) allows developers to focus on the frontend of their applications and leverage backend services without building or maintaining them. BaaS and serverless computing share some similarities, and many providers offer both, but the two models have several differences.
                  </p>
                  <a href="#" class="btn btn-outline-primary btn-cont">
                     Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
