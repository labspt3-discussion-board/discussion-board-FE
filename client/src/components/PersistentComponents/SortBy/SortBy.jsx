import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NativeSelect from '@material-ui/core/NativeSelect';


const SortBy = props => {
  const [filter, updateFilter] = useState('Recent');

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

  // Function that runs on each render and sorts list based on chosen option
  useEffect(() => {
    if (filter === "Recent") {

    } else if (filter === "Upvote") {

    } else if (filter === "Comments") {
      let commentsNumberList = [];
      let sortedList = [];
      let copyList = [...discussionList];

      for (let i = 0; i < discussionList.length; i++) {
        commentsNumberList.push(discussionList[i].commentsNumber)
      }
      commentsNumberList = commentsNumberList.sort((a, b) => b - a)
      console.log(commentsNumberList);

      for (let n = 0; sortedList.length !== discussionList.length; n++) {
        for (let i = 0; i < discussionList.length; i++) {
          if (discussionList[i].commentsNumber === commentsNumberList[n]) {
            sortedList.push(discussionList[i]);
          } else {
          }
        }
      }
      console.log(sortedList)
    }
  })

  // useEffect(()=> {
  //   updateDiscussionList(sortedList);
  //   sortedList = [];
  // })

  const handleSortBy = e => {
    const currentSortBy = e.target.value;

    //Condition allows for avoiding redundant updating of state if clicking on the same sort option.
    if (filter !== currentSortBy) {
      updateFilter(currentSortBy);
    } else {
    }
  }

  return (
    <div>
      <NativeSelect className={props.classes.sortBy} onClick={(e) => handleSortBy(e)}>
        <option value="Recent">Recent</option>
        <option value="Upvote">Upvote</option>
        <option value="Comments">Comments</option>
      </NativeSelect>
      {/* <select onClick={(e) => handleSortBy(e)} name="">
        <option value="Recent">Recent</option>
        <option value="Upvote">Upvote</option>
        <option value="Comments">Comments</option>
      </select> */}
    </div>
  )
}

export default SortBy;