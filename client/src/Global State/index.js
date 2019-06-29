import { setGlobal } from 'reactn';


export default () => {
  setGlobal({
    discussionList: [],
    openModal: false,
    drawerState: false,
    members: [],
    upvoteState: [],
    downvoteState: []
  });
}
