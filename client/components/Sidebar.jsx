import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return(
    <>
    <div className="sideBar">
      <img src="/images/burger.png"/>
      <div className="sideBarContent">
        <Link to="./" className="linkClass">
      <h1 className="sideBarText">Home</h1>
        </Link>
        <Link to="./Search" className="linkClass">
      <h1 className="sideBarText">Subscriptions</h1>
      </Link>
      <Link to="./Search" className="linkClass">
      <h1 className="sideBarText">Featured</h1>
      </Link>
      <Link to="./Search" className="linkClass">
      <h1 className="sideBarText">Fiction</h1>
      </Link>
      <h1 className="sideBarText">Non-Fiction</h1>
      <h1 className="sideBarText">Trending</h1>
      <hr></hr>
      <h2 className="sideBarText">Library</h2>
      <h2 className="sideBarText">Bookshelf</h2>
      <h2 className="sideBarText">Night Stand</h2>
      <h2 className="sideBarText">Activity</h2>
      <h2 className="sideBarText">History</h2>
      </div>
      
    </div>
    </>
  )
}

export default Sidebar