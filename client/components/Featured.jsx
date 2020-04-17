import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <>
    <div className="featuredContent">
    <hr className="homeHr"></hr>
    <h1 className="sectionText">Featured Articles</h1>
    <div className="featuredList">

     <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/beyond.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dpgrace.png"/>
          <div className="profileName">Grace Randolph</div>
        </div>
          <div className="thumbnailTitle">The Future of Entertainment</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/beyond.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dpgrace.png"/>
          <div className="profileName">Grace Randolph</div>
        </div>
          <div className="thumbnailTitle">The Future of Entertainment</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/bezos.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dpbio.png"/>
          <div className="profileName">Biography World</div>
        </div>
          <div className="thumbnailTitle">Biography: Jeff Bezos of Amazon</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/corona.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dpnews.png"/>
          <div className="profileName">ABCD News</div>
        </div>
          <div className="thumbnailTitle">Coronavirus: Facts and Fiction</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/code.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dpcode.png"/>
          <div className="profileName">Learn 2 Code</div>
        </div>
          <div className="thumbnailTitle">Javascript For Beginners</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Featured