import React, { Component } from 'react';
import Logo from "../../../static/assets/togather.png";

class BannerNav extends Component {
  render() {
    return (
      <div class='bannerNav_container'>
        <div class='bannerNav'>
          <div class='bannerNavLinks'>
            <a>Home</a>
            <a>My Profile</a>
              <img src ={Logo} alt="togather" />
            <a>Band-Mates</a>
            <a>About Us</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerNav;