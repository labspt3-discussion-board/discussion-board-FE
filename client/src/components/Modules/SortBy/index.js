import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NativeSelect } from '@material-ui/core/';
import { useGlobal } from 'reactn';



export default props => {
  const [filter, updateFilter] = useState('recent');

  const [discussionList, updateDiscussionList] = useGlobal('discussionList');

  // Function that runs on each render and sorts list based on chosen option

  //UseEffect that will only run at beginning and automatically sort by recent
  //Might have to put this wherever I make the calls for the data
  // useEffect(() => {
  //   let sortedList = [];

  //     function recentSort(a, b) {
  //       const dateA = new Date(a.created_at);
  //       const dateB = new Date(b.created_at);

  //       let comparison = 0;

  //       if (dateA < dateB) {
  //         comparison = 1;
  //       } else if (dateA > dateB) {
  //         comparison = -1;
  //       }
  //       return comparison;
  //     }
  //     sortedList = discussionList.sort(recentSort);
  //     updateDiscussionList(sortedList);
  // }, [])


  const handleSortBy = e => {
    const currentSortBy = e.target.value;

    if (currentSortBy === "Recent") {
      let sortedList = [];

      function recentSort(a, b) {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);

        let comparison = 0;

        if (dateA < dateB) {
          comparison = 1;
        } else if (dateA > dateB) {
          comparison = -1;
        }
        return comparison;
      }
      sortedList = discussionList.sort(recentSort);
      updateDiscussionList(sortedList);

    } else if (currentSortBy === "Upvote") {

      let sortedList = [];

      function votesSort(a, b) {
        const votesA = a.upvote - a.downvote;
        const votesB = b.upvote - b.downvote;

        let comparison = 0;

        if (votesA < votesB) {
          comparison = 1;
        } else if (votesA > votesB) {
          comparison = -1;
        }
        return comparison;
      }
      sortedList = discussionList.sort(votesSort);
      updateDiscussionList(sortedList);

    } else if (currentSortBy === "Comments") {
      let sortedList = [];

      function commentsSort(a, b) {
        const commentsA = a.comment_count;
        const commentsB = b.comment_count;

        let comparison = 0;

        if (commentsA < commentsB) {
          comparison = 1;
        } else if (commentsA > commentsB) {
          comparison = -1;
        }
        return comparison;
      }
      sortedList = discussionList.sort(commentsSort);
      updateDiscussionList(sortedList);
    }
  }






  return (
    <div>
      <NativeSelect className={props.classes.sortBy} onChange={(e) => handleSortBy(e)}>
        <option value="Recent">Recent</option>
        <option value="Upvote">Upvote</option>
        <option value="Comments">Comments</option>
      </NativeSelect>
    </div>
  )
}