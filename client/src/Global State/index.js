import { setGlobal } from 'reactn';

import { dummyData } from '../DummyData';

export default () => {
  setGlobal({
    discussionList: dummyData,
    openModal: false
  });
}
