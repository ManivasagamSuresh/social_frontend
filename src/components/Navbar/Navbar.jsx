import React from "react";
import "./Navbar.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>MB Social</span>
        </Link>
        <AiOutlineHome size={"20px"}/>
        <AiOutlineAppstore size={"20px"}/>
        <FiMoon size={"20px"}/>
        <div className="search">
          <AiOutlineSearch />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <BsFillPersonFill size={"20px"}/>
        <MdOutlineEmail size={"20px"}/>
        <IoIosNotifications size={"20px"}/>
        <div className="user">
          <img src='https://www.shutterstock.com/image-photo/fashion-model-woman-colorful-bright-260nw-1084791122.jpg' alt=''/>
          <span>Mani</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
