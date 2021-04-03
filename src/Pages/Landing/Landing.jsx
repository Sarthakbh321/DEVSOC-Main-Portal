import axios from "axios";
import React from "react";
import "./Landing.css";

function Landing() {
  const handleButton = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/getUrl`;
    try {
      await axios.get(url).then((res) => {
        console.log(res);
        window.location.href = res.data.data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="landing-page" style={{ backgroundImage: `url('/assets/landing-bg.svg')` }}>
      <h1 className="devsoc21 ds-landing">DEVSOC'21</h1>
      <div className="google-link">
        <div className="sign-txt">Get into the action</div>
        <div className="google-btn" onClick={handleButton}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src="/assets/gbtn.svg" alt="google" />
          </div>
          <p className="btn-text">
            <b>Sign in with Google</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
