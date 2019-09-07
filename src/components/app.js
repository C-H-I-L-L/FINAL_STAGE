import React, { Component } from 'react';
import ProfileUI from './profile/profileUI.js';
import BannerNav from "./profile/bannerNav.js";


export default class App extends Component {
  render() {
    return (
      <div>
      <BannerNav />
      <ProfileUI />
      </div>
    );
  }
}
