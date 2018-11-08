import React from 'react';
import styles from '../css/Comment.css';
import Star from './Star';
import CheckMark from './CheckMark';
import moment from 'moment';

const Comment = props => {
  let recommend = (
    <div className={styles.recommend}>
      <CheckMark />
      <span className={styles.recommendComment}>I recommend this product</span>
    </div>
  );

  let verified = <span className={styles.verified}> - Verified Purchaser</span>;

  let response = (
    <div className={styles.response}>
      <div className={styles.shoedidas}>
        <div className={styles.responseHeader}>
          <img id={styles.logo} src='\shoedidas_black_3.svg'></img>
          <span>Response from Shoedidas</span>
        </div>
        <div className={styles.responseBody}>{props.comment.response}</div>
      </div>
    </div>
  );

  return (
    <div className={styles.comment}>
      <div className={styles.container5}>
        <div className={styles.commentStars}>
          {props.ratingToStarTranslation(props.comment.prodRating).map((filling, i) => (
            <Star filling={filling} key={i} id={Math.random()}/>
          ))}
        </div>
        <div className={styles.date}>{moment(props.comment.date).format('ll')}</div>
      </div>
      <div className={styles.commentHeader}>
        {props.comment.header === null ? '' : props.comment.header}
      </div>
      <div className={styles.commentBody}>{props.comment.body}</div>
      {props.comment.recommend ? recommend : ''}
      <div className={styles.userInfo}>
        <span className={styles.userName}>{props.comment.user}</span>
        {props.comment.verified ? verified : ''}
      </div>
      {props.comment.response === null ? '' : response}
      <div className={styles.commentFooter}>
        <a className={styles.reply}>
          Reply
        </a>
        <div className={styles.reviewHelpful}>
          <div className={styles.reviewQuestion}>Was this review helpful? </div>
          <div className={styles.helpful}>
            <div className={styles.yes}>Yes</div>
            <span className={styles.yesCount}>({props.comment.yesRating})</span>
          </div>
          <div className={styles.unhelpful}>
            <div className={styles.no} href="">
              No
            </div>
            <span className={styles.noCount}>({props.comment.noRating})</span>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
    </div>
  );
};

export default Comment;
