import React              from 'react';
import CssBaseline        from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';

import {LandingPage} from '../../components.js'
import Navigation from '../../PersistentComponents/Navigation/Navigation'
import SearchResultsPage from '../../Views/SearchResultsPage/SearchResultsPage';
import SubForum from '../../Views/SubForum';
import DiscussionPage from '../../Views/DiscussionPage';

import HOST from '../../../Host';

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" component={Navigation}/>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/searchResults/:id" component={SearchResultsPage}/>
      <Route exact path="/f/:id/" component={SubForum}/>
      <Route exact path="/f/:id/discussion/:id" component={DiscussionPage}/>
      <Route exact path="/account/:id/settings"/>
    </>
  )
}

export default App;
