import React, { useState, useEffect } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import { styles } from './SearchResults.style';
import Discussions from '../../Modules/Discussions/';

export default withStyles(styles)(props => {

  const [searchResultsList, updateSearchResultsList] = useState([]);
  const {classes} = props;

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