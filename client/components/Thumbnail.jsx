import React from "react";
import { Link } from "react-router-dom";

class Thumbnail extends React.Component {
  render (){
    return(
    <>
      
          <div className="thumbnail">
            <div className="thumbnailContent">
              <div className="thumbnailImage">
                <Link to={`/Article/${this.props.id}`}>
                <div class="thumbnaiImage"><img src={this.props.thumbnailImage} /></div>
                </Link>
              </div>
              <div className="profileTag">
                <img src="/images/dp.png" />
                <div className="profileName">{this.props.author}</div>
              </div>
              <div className="thumbnailTitle">
                {this.props.title}
              </div>
              <div className="thumbnailMeta">108k reads - 1 year ago</div>
            </div>
          </div>

          
    </>
    )
  };
  
};

export default Thumbnail;
