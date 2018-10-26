import React from 'react';

const Comment = props => (
  <div>
    <div className="commentStars">****</div>
    <div className="date">September 20, 2018</div>
    <div className="body">Great product. Been wanting 2.0 3 M for a while now</div>
    <div className="recommend">I recommend this product</div>
    <div className="userInfo">
      <span className="userName">andris2110</span>
      <span className="verified"> - Verified Purchaser</span>
    </div>
    <div className="commentFooter">
      <a className="reply">Reply</a>
      <div className="reviewHelpful">
        <div className="helpful">
          <a className="yes">Yes</a>
          <span className="yesCount">4</span>
        </div>
        <div className="unhelpful">
          <a className="no">No</a>
          <span className="noCount">1</span>
        </div>
      </div>
    </div>
  </div>
);

export default Comment;
