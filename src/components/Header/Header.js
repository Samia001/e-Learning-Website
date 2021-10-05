import React from "react";
import Navbar from "../NavBar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="container">
        <h1 className="heading">
          Education is the most powerful weapon which you can use to change the
          world - Nelson Mandela
        </h1>
      </div>
    </div>
  );
};

export default Header;
