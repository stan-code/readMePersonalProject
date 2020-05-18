import React from 'react'
import {Link} from 'react-router-dom'
import Thumbnail from './thumbnail'

class Foryou extends React.Component {
    state = {
      articles: [
        {
        id: 1,
        thumbnailImage: "/images/beyond.png",
        author: "Grace",
        title: "BTT"
        },
      {
        id: 2,
        thumbnailImage: "/images/bezos.png",
        author: "Jeff",
        title: "Amazon"
      },
      {
        thumbnailImage: "/images/corona.png",
        id: 3,
        author: "Virus",
        title: "Covid"
      }

      ]
  }

  render(){
  return (
    <>
      <div className="featuredContent">
        <hr className="homeHr"></hr>
        <h1 className="sectionText">Hi</h1>
        <div className="featuredList">
          <ul className="featuredList">{this.state.articles.map(article => {
            return<Thumbnail key={article.id} thumbnailImage={article.thumbnailImage} author={article.author} title={article.title} id={article.id}/>
          })}</ul>
        </div>
      </div>
    </>
  );
  }
}


export default Foryou