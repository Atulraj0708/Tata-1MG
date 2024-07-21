import React from "react";
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import CartIcon from "../Cart/CartIcon";
import { useSiteContext } from "../../store/SiteProvider";
import { myAuth } from "../../store/firebase";
import Swal from 'sweetalert2'; // Import SweetAlert2
import './Header.css';

const Header = () => {
  const [state, dispatch] = useSiteContext(); // Destructure the dispatch function

  const logoutHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out and your cart will be cleared.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        myAuth.signOut(myAuth.auth)
          .then(() => {
            // Clear cart in context
            dispatch({ type: "CLEAR" });
            Swal.fire({
              icon: 'success',
              title: 'Logged Out',
              text: 'You have been logged out successfully.',
              confirmButtonText: 'OK'
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Logout Failed',
              text: err.message,
              confirmButtonText: 'Try Again'
            });
          });
      }
    });
  }

  const userElement = state.user ? (
    <div className="userMenu">
      <li onClick={logoutHandler} className="logoutButton">Logout</li>
      <FaUserCircle size={24} className="userIcon" />
      <div className="userDropdown">
        <p>Hi, {(state.user.length > 6) ? `${state.user.slice(0, 6)}...` : state.user}</p>
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
