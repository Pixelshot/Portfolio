import './intro.css';
import React from 'react';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Hazri</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Ai Enthusiast</div>
              <div className="i-title-item">Fitness Enthusiast</div>
              <div className="i-title-item">Web Developer</div>
            </div>
          </div>
          <div className="i-desc">
            Children of the sun, see your time has just begun, searching for
            your ways, through adventures every day. Every day and night, with
            the condor in flight, with all your friends in tow, you search for
            the Cities of Gold.
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
