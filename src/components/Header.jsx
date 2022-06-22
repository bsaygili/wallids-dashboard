import React from "react";
// logo image
import main_logo from "../assets/img/wallids_logo.png";
// components
import SearchBar from "./SearchBar";

function Header() {
  const user = {
    name: "Bahadır",
    lastName: "Saygılı",
    position: "Front-end Developer",
  };
  return (
    <div className="main-header">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <span className="d-flex justify-content-between align-items-center">
          <a href="https://wallids.com/">
            <img src={main_logo} alt="main_logo" />
          </a>
          <h2>wallids</h2>
        </span>

        <SearchBar />
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "500px" }}
        >
          <button className="btn btn-primary" style={{ height: "2.5rem" }}>
            Enterprise
          </button>

          <span className="d-flex justfiy-content-center align-items-center border-mail">
            {" "}
            <i className="bi bi-envelope " />
          </span>

          <div
            className="d-flex justify-content-between"
            style={{ width: "185px" }}
          >
            <p className="avatar-bg">{user.name.split("")[0]}</p>
            <div className="flex-column">
              <h6 className="text">
                {user.name} {user.lastName}
              </h6>
              <p style={{ fontSize: "10px" }}>{user.position}</p>
            </div>
            <a href="">
              <i className="bi bi-caret-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
