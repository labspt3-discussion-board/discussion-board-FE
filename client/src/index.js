import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/jsx/App';
import { setGlobal } from 'reactn';
import { BrowserRouter as Router } from 'react-router-dom';

const dummyData = [{
  title: 'Lorem Ipsum',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-10T03:34:38.154231Z',
  description: 'Lorem Ipsum',
  comment_count: 3,
  upvote: 10,
  downvote: 20,
  id: 1
},{
  title: 'Lorem Ipsum',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-02T03:34:38.154231Z',
  description: 'Lorem Ipsum!',
  comment_count: 4,
  upvote: 0,
  downvote: 10,
  id: 2
},{
  title: 'Lorem Ipsum?',
  subForumName: 'Lorem Ipsum',
  ownerNameName: 'Some guy',
  created_at: '2019-06-03T03:34:38.154231Z',
  description: '...Lorem Ipsum',
  comment_count: 5,
  upvote: 1550,
  downvote: 220,
  id: 3
},
{
  title: 'Lorem Ipsum',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-04T03:34:38.154231Z',
  description: 'Lorem Ipsum',
  comment_count: 6,
  upvote: 0,
  downvote: 2780,
  id: 4
},{
  title: 'Lorem Ipsum',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-05T03:34:38.154231Z',
  description: 'Lorem Ipsum!',
  comment_count: 7,
  upvote: 110,
  downvote: 10,
  id: 5
},{
  title: 'Lorem Ipsum?',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-06T03:34:38.154231Z',
  description: '...Lorem Ipsum',
  comment_count: 8,
  upvote: 70,
  downvote: 30,
  id: 6
},
{
  title: 'Lorem Ipsum',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-07T03:34:38.154231Z',
  description: 'Lorem Ipsum',
  comment_count: 9,
  upvote: 10,
  downvote: 50,
  id: 7
},{
  title: 'Lorem Ipsum',
  subForumName: 'Lorem Ipsum',
  ownerName: 'Some guy',
  created_at: '2019-06-08T03:34:38.154231Z',
  description: 'Lorem Ipsum!',
  comment_count: 10,
  upvote: 30,
  downvote: 20,
  id: 8
},{
  title: 'Lorem Ipsum?',
  subForumName: 'Lorem Ipsum',
  ownerNameName: 'Some guy',
  created_at: '2019-06-09T03:34:38.154231Z',
  description: '...Lorem Ipsum',
  comment_count: 0,
  upvote: 20,
  downvote: 20,
  id: 9
}];

setGlobal({
  discussionList: dummyData
});

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

