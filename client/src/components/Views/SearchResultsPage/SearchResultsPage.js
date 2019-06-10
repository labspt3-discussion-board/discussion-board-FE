import React, { useState, useEffect } from 'react';

export default props => {

  const [searchResultsList, updateSearchResultsList] = useState([]);


  <div>
    {/* Might make copy of top discussions from landing page to display subtopics */}
    <h1>Search Results</h1>
    {/* {searchResultsList ? searchResultsList.map(result => {
      return(
        <div>
          <h2>result.title</h2>

        </div>
      )
    }): 'Loading'} */}
  </div>
}