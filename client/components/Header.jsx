import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
  return (
    <>
      <div className="navBarContents">
        <div className="navBar">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" draggable="false" />
            </Link>
          </div>
          <div>
            <input type="text" placeholder="Search" className="searchBar" formAction="./Search"></input>
          </div>
          <Link to="/Search">
            <div className="searchButton">
              <img src="/images/magni.png" draggable="false" />
            </div></Link>
          <Link to="/Publish">
            <div className="publishButton">
              <img src="/images/upload.png" draggable="false" />
            </div>
          </Link>
          <div className="vl"></div>
          <div className="notificationButton">
            <img src="/images/read.png" draggable="false" />
          </div>
          <div className="vl"></div>
          <div className="signupButton">
            <h1>Sign Up</h1>
          </div>
        </div>
      </div>
    </>

  )
  }
}

export default Header