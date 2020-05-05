import React from "react";
import { Link } from "react-router-dom";

class Foryou extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render (){
    <>
      
          <div className="thumbnail">
            <div className="thumbnailContent">
              <div className="thumbnailImage">
                <Link to="/Article/`">
                  <img src={thumbnailImage} />
                </Link>
              </div>
              <div className="profileTag">
                <img src="/images/dp.png" />
                <div className="profileName">{author}</div>
              </div>
              <div className="thumbnailTitle">
                {title}
              </div>
              <div className="thumbnailMeta">108k reads - 1 year ago</div>
            </div>
          </div>

          
    </>
  };
  
};

export default Foryou;
