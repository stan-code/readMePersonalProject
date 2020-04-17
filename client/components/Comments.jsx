import React from 'react'

const Comments = () => {
  return (
    <>
    <div className="comments">
      <div className="commentsHr"></div>
      <h1 className="commentsHeader">Comments</h1>
    <div className="newComment">
      <img src="images/dp.png"/>
    <input type="text" className="newCommentInput" placeholder="Add a comment"></input>
    </div>
    <div className="newCommentHr"></div>
    <div className="postCommentButton"><h1 className="commentButtonText" unselectable="on">Post Comment</h1></div>
    <div className="cancelCommentButton"><h1 className="cancelButtonText" unselectable="on">Cancel</h1></div>
    </div>
    </>
  )
}

export default Comments