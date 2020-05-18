import React, { Component } from 'react'
import { Link } from 'react-router-dom'







class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      names: 'jon',
    };
  }

change () {
  this.setState({
    names: 'yankee'
  })
}


  render() {
    return (
      <>
        <div className="profileContent">
          <div className="profileHeader">
            <img src="/images/bannerPlaceHold.jpg" />
          </div>
          <div className="profileBanner"></div>
          <div className="profileBannerDisplay">
            <img src="/images/dp.png" />
            <div className="profileBannerDisplayInner">
              <h1 className="profilePageName">{this.state.names}</h1>
              <div className="profilePageDetails">
                <h2 className="profilePageDetailsText">25M Subscribers</h2>
                <h2 className="profilePageDetailsText">200M Daily Reads</h2>
              </div>
            </div>
            <button className="subButton" onClick={() => change()}>
              Subscribe
            </button>
          </div>

          <div className="profileMenu">
            <h2 className="profileMenuText">About</h2>
            <h2 className="profileMenuText">Articles</h2>
            <h2 className="profileMenuText">BookShelves</h2>
            <h2 className="profileMenuText">Search</h2>
          </div>
        </div>
      </>
    );
  }
}


export default ProfilePage