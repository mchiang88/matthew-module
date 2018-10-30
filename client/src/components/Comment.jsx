import React from 'react';
import '../css/Comment.css'

const Comment = props => (
  <div className="comment">
    <div className="container5">
      <div className="commentStars">****</div>
      <div className="date">September 20, 2018</div>
    </div>
    <div className="commentHeader"></div>
    <div className="commentBody">Great product. Been wanting 2.0 3 M for a while now</div>
    <div className="recommend">
      <span className="checkMark">✔</span>
      <span className="recommendComment">I recommend this product</span>
    </div>
    <div className="userInfo">
      <span className="userName">andris2110</span>
      <span className="verified"> - Verified Purchaser</span>
    </div>
    <div className="commentFooter">
      <a className="reply" href="">Reply</a>
      <div className="reviewHelpful">
        <div className="reviewQuestion">Was this review helpful? </div>
        <div className="helpful">
          <div className="yes">Yes</div>
          <span className="yesCount">(4)</span>
        </div>
        <div className="unhelpful">
          <div className="no" href="">No</div>
          <span className="noCount">(1)</span>
        </div>
      </div>
    </div>
    <hr className="divider" />
  </div>
);

export default Comment;
