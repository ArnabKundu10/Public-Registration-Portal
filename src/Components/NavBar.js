import React from "react";
import "../CSS/StyleNav.css";
import logo from "../Assets/Riyo.png";
function Navbar() {
  return (
    <>
      <div className="NavBar d-flex justify-content-between pt-2 pb-2">
        <div className="ms-3">
          <img src={logo} className="riologo" alt="" />
        </div>
        <div className="p-0 me-3 mt-1">
          <i className="fa-solid fa-bars icon1"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
