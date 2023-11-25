import React from "react";
import { Link } from 'react-router-dom';
import { Buttons } from "../../components/Buttons";
import "./style.css";
import finalHomepage from "../../assets/finalHomepage.png";
import { SignUp } from "../SignUp/SignUp";

export const LandingPage = () => {

  return (
    <div className="landing-page">
      <div className="div">
        <div className="top-nav-bar">
          <div className="div-wrapper">
            <div className="text-wrapper">Job Quest</div>
          </div>
        </div>
        <div className="overlap">
          <div className="landing-section">
            <img className="image" alt="Image" src={finalHomepage} />
            <div className="overlap-group">
              <p className="p">Join for free in order to save your progress and keep track of your tasks.</p>
            </div>
            <p className="text-wrapper-2">Your path to employment: streamlined job search guidance</p>
            <p className="text-wrapper-3">Feeling overwhelmed with job searching?</p>
          </div> 
              <Buttons buttonsSolidLargeText="Start Now" className="buttons-instance" property1="solid-large-blue">
                <Link to="/signup"></Link>
              </Buttons>
        </div>
      </div>
    </div>
  );
};
