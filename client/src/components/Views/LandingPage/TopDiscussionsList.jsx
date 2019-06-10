import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default props => {
  const dummyData = [{
    title: 'Lorem Ipsum',
    subtopic: 'Lorem Ipsum',
    owner: 'Some guy',
    createdAt: 'May 29 2019',
    text: 'Lorem Ipsum',
    commentsNumber: 3,
  },{
    title: 'Lorem Ipsum',
    subtopic: 'Lorem Ipsum',
    owner: 'Some guy',
    createdAt: 'May 29 2019',
    text: 'Lorem Ipsum!',
    commentsNumber: 4,
  },{
    title: 'Lorem Ipsum?',
    subtopic: 'Lorem Ipsum',
    owner: 'Some guy',
    createdAt: 'May 29 2019',
    text: '...Lorem Ipsum',
    commentsNumber: 999,
  }];
  const [discussionList, updateDiscussionList] = useState(dummyData);

  // useEffect(generateList = () => {

  // })

  return (
    <div className={props.classes.topDiscussions}>
      {discussionList ? discussionList.map(discussion => {
        return (
          <div className={props.classes.discussion}>
            <div>
              <h3 className={props.classes.discussionTitle}>{discussion.title }</h3>
              <h4 className={props.classes.subtopic}>{`/d/${discussion.subtopic}`}</h4>
              <h5>{`${discussion.owner} - ${discussion.createdAt}`}</h5>
              <p>{discussion.text}</p>
            </div>
            <div className={props.classes.comments}>
              <p>Comments</p>
              <p className={props.classes.commentsNumber}>{discussion.commentsNumber}</p>
            </div>
          </div>
        )
      }) : 'Loading'}

      {/* {discussionList ? discussionList.map(discussion => {
        return (
          <div>
            <div>
              <h3>{discussion.title}</h3>
              <h4>{`/d/${discussion.subtopic}`}</h4>
              <h5>{`${discussion.owner} - ${discussion.createdAt}`}</h5>
              <p>{discussion.text}</p>
            </div>
            <div>
              <p>Comments</p>
              <p>{discussion.commentsNumber}</p>
            </div>
          </div>
        )
      }) : 'Loading'} */}
    </div>
  )
};
