import React from "react";
import logo from "../../assets/cardimage/logo.jpg";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="w-full h-[8dvh] bg-white">
      <div className="h-[100px] w-[100px] ml-[3rem]">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
