import React from 'react'
import {Link} from 'react-router-dom'

const Foryou = () => {
  return (
    <>
    <div className="featuredContent">
    <hr className="homeHr"></hr>
    <h1 className="sectionText">For You</h1>
    <div className="featuredList">
    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/world.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dp.png"/>
          <div className="profileName">Actualized</div>
        </div>
          <div className="thumbnailTitle">Spiral Dynamics: A Model For The World</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
        <Link to="/Article">
            <img src="/images/now.png"/>
            </Link>
          </div>
            <div className="profileTag">
            <img src="/images/dp.png"/>
          <div className="profileName">Actualized</div>
        </div>
          <div className="thumbnailTitle">Spiral Dynamics: A Model For The World</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
            <img src="/images/trump.png"/>
          </div>
            <div className="profileTag">
            <Link to="/Article">
            <img src="/images/dp.png"/>
            </Link>
          <div className="profileName">Actualized</div>
        </div>
          <div className="thumbnailTitle">Spiral Dynamics: A Model For The World</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
            <img src="/images/cook.png"/>
          </div>
            <div className="profileTag">
            <Link to="/Article">
            <img src="/images/dp.png"/>
            </Link>
          <div className="profileName">Actualized</div>
        </div>
          <div className="thumbnailTitle">Spiral Dynamics: A Model For The World</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
    </div>

    <div className="thumbnail">
      <div className="thumbnailContent">
        <div className="thumbnailImage">
            <img src="/images/salad.png"/>
          </div>
            <div className="profileTag">
            <Link to="/Article">
            <img src="/images/dp.png"/>
            </Link>
          <div className="profileName">Actualized</div>
        </div>
          <div className="thumbnailTitle">Spiral Dynamics: A Model For The World</div>
          <div className="thumbnailMeta">108k reads - 1 year ago</div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}


export default Foryou