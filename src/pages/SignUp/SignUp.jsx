import React from "react";
import { XClose } from "../../components/XButtons/XClose";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="div" />
          <div className="create-an-account">
            <div className="overlap-group">
              <div className="text-wrapper">Create An Account</div>
              <p className="p">Create an account to keep track of your job search journey - for free!</p>
              <div className="group">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Email Address</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Password</div>
                </div>
              </div>
              <p className="already-have-an">
                <span className="span">Already have an account?</span>
                <span className="text-wrapper-4">&nbsp;</span>
                <span className="text-wrapper-5">Log In</span>
              </p>
              <div className="create-account">
                <div className="overlap-2">
                  <div className="text-wrapper-6">Create Account</div>
                </div>
              </div>
              <XClose className="x-close" color="#25274C" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};