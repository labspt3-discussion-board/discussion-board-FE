import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';

import Landing from '../../Views/Landing';
import SearchResults from '../../Views/SearchResults';
import SubForum from '../../Views/SubForum';
import Discussion from '../../Views/Discussion';
import Navigation from '../../Modules/Navigation'



function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" component={Navigation}/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/searchResults/:id" component={SearchResults}/>
      <Route exact path="/f/:id/" component={SubForum}/>
      <Route exact path="/f/:id/discussion/:id" component={Discussion}/>
      <Route exact path="/account/:id/settings"/>
    </>
  )
}

export default App;
