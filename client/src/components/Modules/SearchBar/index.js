import React, { useState } from 'react';
//refactor with async/await, more hook knowledge
import axios from 'axios';
import Input from '@material-ui/core/Input';
import { withRouter } from 'react-router-dom';
import { useGlobal } from 'reactn';

const HOST = 'https://discussion-board-api.herokuapp.com/'


export default withRouter(props => {
  const [searchValue, updateSearchValue] = useState('');

  const handleInputChange = (e) => {
    updateSearchValue(e.target.value);
  }

  const handleSubmit = (e) => {
    //Will first fetch data with searchValue, then clear searchValue
    //fetch data through axios using searchInput as req data
    e.preventDefault();
    console.log('yo')
    //line is meant for use in axios res scope
    props.history.push(`/searchResults/${searchValue}`)
    updateSearchValue('')



    // axios.get(`${ HOST }api/create-user/`)
    // // :${searchValue}
    //   .then((res) => {
    //       console.log(res.data)
    //       updateUserList(userList.push(res.data))
    //       //Must wait for axios before clearing searchValue
    //       updateSearchValue('');
    //   })
    //   .catch(err => console.log(err));


  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input className={props.classes.searchBar} placeholder="Search" type="search" name="searchBar" value={searchValue} onChange={handleInputChange} />

      </form>
      {/* <Input type="search" name="searchBar" value={searchValue} onChange={handleInputChange} /> */}
      {/* <input type="submit" onClick={(e) => handleSubmit(e)}/> */}
    </div>
  )
});
