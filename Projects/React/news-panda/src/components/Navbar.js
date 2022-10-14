import React, { useEffect } from "react";
import Logo from "../assets/logos/Logo1.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ title }) => {
  const newsTypes = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/sports",
      name: "Sports"
    },
    {
      path: "/business",
      name: "Business"
    },
    {
      path: "/entertainment",
      name: "Entertainment"
    },
    {
      path: "/health",
      name: "Health"
    },
    {
      path: "/science",
      name: "Science"
    },
    {
      path: "/technology",
      name: "Technology"
    },
    {
      path: "/about",
      name: "About"
    }
  ]

  const location = useLocation();
  useEffect(() => {
  }, [location]);

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" />
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              newsTypes.map((newsType) => {
                return (
                  <li className="nav-item" key={newsType.path}>
                    <Link className={`nav-link ${location.pathname === newsType.path ? "active" : ""}`} to={newsType.path}>
                      {newsType.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar