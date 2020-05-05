import React from 'react'
import {Link} from 'react-router-dom'
import Thumbnail from './thumbnail'

const Foryou = () => {
  return (
    <>
      <div className="featuredContent">
        <hr className="homeHr"></hr>
        <h1 className="sectionText">For You</h1>
        <div className="featuredList">
          {/* <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail /> */}
        </div>
      </div>
    </>
  );
}


export default Foryou