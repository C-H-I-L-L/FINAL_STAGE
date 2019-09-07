import React, { Component } from 'react';

class BannerNav extends Component {
  render() {
    return (
      <div class='bannerNav_container'>
        <div class='bannerNav'>
          <div class='bannerNavLinks'>
            <a>Home</a>
            <a>My Profile</a>
            <a>Band-Mates</a>
            <a>About Us</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerNav;