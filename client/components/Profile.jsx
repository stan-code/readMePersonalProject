import React from 'react'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
  return(
    <>
    <div className="profileContent">
    <div className="profileHeader">
      <img src="/images/bannerPlaceHold.jpg"/>
    </div>
    <div className="profileBanner">
   </div>
   <div className="profileBannerDisplay">
<img src="/images/dp.png"/>
<div className="profileBannerDisplayInner">
<h1 className="profilePageName">Discover World</h1>
<div className="profilePageDetails">
<h2 className="profilePageDetailsText">25M Subscribers</h2>
<h2 className="profilePageDetailsText">200M Daily Reads</h2>
</div>
</div>
<div className="subButton">Subscribe</div>
   </div>

        <div className="profileMenu">

        <h2 className="profileMenuText">About</h2>
        <h2 className="profileMenuText">Articles</h2>
        <h2 className="profileMenuText">BookShelves</h2>
        <h2 className="profileMenuText">Search</h2>
        </div>
   </div>
</>
  )
}

export default ProfilePage