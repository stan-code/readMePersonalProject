import React from 'react'
import { Link } from 'react-router-dom'

const Searchpage = () => {
  return (
    <>
    <div className="searchContent">
      <h1 className="searchContentText">0 Results Found </h1>
      <div className="searchResultHR">
      </div>
      <div className="noResults">
          <img src="images/couldntFind.png" draggable="false"/>
          </div>

    </div>
    </>
  )
}

export default Searchpage