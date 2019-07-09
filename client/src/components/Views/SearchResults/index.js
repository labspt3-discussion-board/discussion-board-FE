import React, { useState, useEffect } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { useGlobal } from 'reactn';
import { styles } from './SearchResults.style';
import Discussions from '../../Modules/DiscussionsList';

export default withStyles(styles)(props => {

  const [discussionList, updateDiscussionList] = useGlobal('discussionList');
  const [searchResultsList, updateSearchResultsList] = useState([]);
  const {classes} = props;

  // const handleSearch = (discussionName) => {
  //   return discussionName === searchInput;
  // }

  // useEffect(()=>{
  //   const searchInput = props.match.params.id;

  //   console.log(discussionList.find(handleSearch))
  // },[])

return(
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
  <Discussions/>
  </div>
  )
})