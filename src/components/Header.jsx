import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !localStorage.getItem("authToken");
//   console.log("toekn",isAuthenticated);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear the token
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" >
          <h1>Ecommerce-Website Developed By Dheerendra kumar</h1>
        </Link>
      </div>
      <ul >
        {/* Show Login and Signup options by default */}
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" >
                Signup
              </Link>
            </li>
          </>
        ) : (
            <>
            {/* Show Logout and Product Page if authenticated */}
            <li>
              <button onClick={handleLogout} >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
     
    </nav>
  );
};



export default Navbar;
