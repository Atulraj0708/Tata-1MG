import React from "react";
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import CartIcon from "../Cart/CartIcon";
import { useSiteContext } from "../../store/SiteProvider";
import { myAuth } from "../../store/firebase";
import './Header.css';

const Header = () => {
  const ctx = useSiteContext()[0];

  const logoutHandler = () => {
    myAuth.signOut(myAuth.auth);
  }

  const userElement = ctx.user ? (
    <div className="userMenu">
      <li onClick={logoutHandler} className="logoutButton">Logout</li>
      <FaUserCircle size={24} className="userIcon" />
      <div className="userDropdown">
        <p>Hi, {(ctx.user.length > 6) ? `${ctx.user.slice(0, 6)}...` : ctx.user}</p>
        <hr style={{ color: "grey" }} />
        <ul>
          {/* <li>View profile</li>
          <li>My orders</li>
          <li>Manage Payments</li>
          <li>My lab test</li> */}
        </ul>
      </div>
    </div>
  ) : (
    <Link to="/login" className="linkref1">Login | Signup</Link>
  );

  return (
    <div className="header_1Con">
      <div className="firstPart">
        <div className="logoCon">
          <Link to="/">
            <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="OneMg Logo" />
          </Link>
        </div>
        <ul className="tabList">
          <li>MEDICINES</li>
          <li>
            LAB TESTS
            <span className="badge">SAFE</span>
          </li>
          <li>CONSULT DOCTORS</li>
          <li>
            PARTNERSHIPS
            <span className="badge">NEW</span>
          </li>
          <li>
            CARE PLAN
            <span className="badge">SAVE MORE</span>
          </li>
        </ul>
      </div>
      <div className="secondPart">
        <ul className="list">
          <li>
            {userElement}
          </li>
          <li>Offers</li>
          <Link to="/checkout">
            <NavLink>
              <CartIcon />
            </NavLink>
          </Link>
          <li>Need Help?</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
