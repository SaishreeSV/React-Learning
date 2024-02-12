import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");
  //if no dependency array => useEffect is called on every componenet render
  //if empty dependency array => useEffect is called only on initial render(just once)
  //if dependency array is [btnName] => called everytime btnName is updated
  useEffect(()=>{
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
