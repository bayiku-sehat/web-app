import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div class="wrapper row1">
      <header id="header" class="hoc clear">
        <div id="logo" class="one_third first">
          <h1 class="logoname">
            <Link to="/">
              <img src="images/bayikusehat.png" alt="" />
            </Link>
          </h1>
        </div>
        <strong className="block fs-4 fw-bolder text-center">Apps ini Tersedia di Platfom</strong>
        <div class="two_third">
          <ul class="nospace clear">
            <li class="one_half first">
              <div class="block clear">
                <i class="fas fa-phone"></i>{" "}
                <span>
                  <strong className="block fs-4 fw-bolder">Google PlayStore</strong> bayikuSehat
                </span>{" "}
              </div>
            </li>
            <li class="one_half">
              <div class="block clear">
                <i class="far fa-clock"></i>{" "}
                <span>
                  <strong className="block fs-4 fw-bolder">iOS Store</strong> bayikuSehat
                </span>{" "}
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
