import React from "react";
import "../styles.css";

import PropTypes from "prop-types";

// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}..
        </a>
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
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}

              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}

              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input form-check-input-black"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={(e) => {
                props.toggleMode("black");
              }}
              title={
                props.mode === "light"
                  ? "Enable Dark Mode"
                  : "Enable Light Mode"
              }
            />
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "danger" : "light"
            }`}
          >
            <input
              className="form-check-input form-check-input-red"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={(e) => {
                props.toggleMode("red");
              }}
              title={
                props.mode === "light" ? "Enable Red Mode" : "Enable Light Mode"
              }
            />
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "warning" : "light"
            }`}
          >
            <input
              className="form-check-input form-check-input-yellow"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={(e) => {
                props.toggleMode("yellow");
              }}
              title={
                props.mode === "light"
                  ? "Enable Yellow Mode"
                  : "Enable Light Mode"
              }
            />
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "Primary" : "light"
            }`}
          >
            <input
              className="form-check-input form-check-input-blue"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={(e) => {
                props.toggleMode("blue");
              }}
              title={
                props.mode === "light"
                  ? "Enable Blue Mode"
                  : "Enable Light Mode"
              }
            />
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "success" : "light"
            }`}
          >
            <input
              className="form-check-input form-check-input-green"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={(e) => {
                props.toggleMode("green");
              }}
              title={
                props.mode === "light"
                  ? "Enable Green Mode"
                  : "Enable Light Mode"
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.protoType = { title: PropTypes.string.isRequired };
