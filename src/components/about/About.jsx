import React from "react";
import "./about.css";
import Coding from "../../img/unsplash.jpg";
import Award from "../../img/award.png";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Coding} alt="coding" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          lo-fi gochujang kale chips keytar farm-to-table, hell of vaporware
          organic post-ironic kitsch selvage.
        </p>
        <p className="a-desc">
          Chicharrones keytar paleo, etsy sustainable bespoke snackwave unicorn
          helvetica gastropub deep v succulents selfies normcore occupy. Tumeric
          butcher distillery skateboard viral.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-text">
            <h4 className="a-award-title">
              International Design Award of The Century
            </h4>
            <p className="a-award-desc">
              Lo-Fi lomo food truck, poke DIY taxidermy yuccie pop-up portland
              vice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
