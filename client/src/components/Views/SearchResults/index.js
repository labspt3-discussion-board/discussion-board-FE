import React, { useState, useEffect } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { useGlobal } from 'reactn';
import { styles } from './SearchResults.style';
import Discussions from '../../Modules/DiscussionsList';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../../constants';


export default withRouter(withStyles(styles)(props => {

  const [discussionList, updateDiscussionList] = useGlobal('discussionList');
  const [searchResultsList, updateSearchResultsList] = useState([]);
  const [nextUrl, updateNextUrl] = useState('');
  const { classes } = props;



  // const handleSearch = (discussionName) => {
  //   const searchInput = props.match.params.input;
  //   return discussionName.title === searchInput;
  // }

  const handleNext = (url) => {
    while (nextUrl !== null) {
      if (url) {
        axios({
          method: 'get',
          url: url
        }).then(res => {
          if (res.data.next) {
            const nextList = res.data.results;
            const nextUrl = res.data.next;
            updateDiscussionList([...discussionList, ...nextList])
          }
        }).catch(err => {
          console.log(err);
        });
      }
    }
  }

  useEffect(() => {

    axios({
      method: 'get',
      url: `${HOST}api/discussions/`,
    }).then(res => {
      updateDiscussionList(res.data.results)
      updateNextUrl(res.data.next);
      console.log(res);
    }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    if (nextUrl !== null) {
      axios({
        method: 'get',
        url: nextUrl
      }).then(res => {
        const nextList = res.data.results;
        updateDiscussionList([...discussionList, ...nextList])
        updateNextUrl(res.data.next);
      }).catch(err => {
        console.log(err);
      });
    } else {
      let searchOutput = discussionList.find(element => {
        const searchInput = props.match.params.input;
        return element.title === searchInput;
      });
      console.log(searchOutput)
      updateDiscussionList([searchOutput]);
    }
  }, [nextUrl])

  return (
    <div className={classes.searchResultsContainer}>
      {/* Might make copy of top discussions from landing page to display subtopics */}
      <Typography className={classes.searchTitle}>Search Results</Typography>
      {/* {searchResultsList ? searchResultsList.map(result => {
      return(
        <div>
          <h2>result.title</h2>
        </div>
      )
    }): 'Loading'} */}
      <Discussions />
    </div>
  )
}))