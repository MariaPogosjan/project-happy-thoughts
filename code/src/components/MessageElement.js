import React from 'react'
import moment from 'moment'


const MessageElement = ({ message, onLikesIncrease }) => {
  //console.log(count, 'heej')
  return (
    <>
      <p className="message-content">{message.message}</p>
      <p>{message.username === '' ? 'Anonymous' : message.username}</p>
      <p className="time">{message.hashtag.reduce((a,b) => { return a.length > b.length ? a : b})}</p>
      <div className="button-container">
        <div className="like-btn">
          <button 
            className={message.hearts > 0 ? "heart-button heart-button-clicked" : "heart-button" } 
            onClick={() => onLikesIncrease(message._id)}
          >
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
          </button>
          <p>x{message.hearts}</p>
        </div> 
        <div>
          <p className="time">{moment(message.createdAt).fromNow()}</p>
        </div>
      </div>
    </>
  )
}

export default MessageElement

