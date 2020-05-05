import React from 'react'

const NewPost = () => {
  return(
    <>
    <div className="newPostPage">

        <div className="newPostMetaInput">
          <div className="newPostHeader">
        <img className="newPostProfile" src="images/dp.png"/>
        <h1 className="newPostHeaderText">Discover World</h1>
        </div>
        <textarea className="contentTitleInput" type="text" placeholder="Title"/>
            <div className="addToBookshelf">
              <div>
              <h1 className="addToBookshelfText">add to bookshelf: </h1>
              </div>
              <div className="bookshelfSelect">
                select
                <img src="./images/dropdownselect.png"/>
              </div>
            </div>
        <textarea className="contentDescriptionInput" type="text" placeholder="Description"/>
        <textarea className="contentTagsInput" type="text" placeholder="Tags (separate by comma)"/>
        </div>

        <div className="newPostVL"></div>

        <div className="newPostContentInput">
          <h1 className="newPostH1">Publish</h1>
          <div className="adjustInputs">
        <textarea className="contentTextInput" type="text" placeholder="First paragraph"/>
        </div>
        </div>

    </div>
    </>
  )
}

export default NewPost