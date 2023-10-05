import React from "react";
import {useNavigate} from 'react-router-dom'
function Hero() {
  const navigate=useNavigate();
  return (
    <div className="hero">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Discover your dream home today with our user-friendly real estate
              platform. Start your journey towards homeownership with just a few
              clicks!
            </p>
            <button className="btn btn-primary" onClick={()=>navigate("/myapp/src/components/HouseList.jsx")}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
