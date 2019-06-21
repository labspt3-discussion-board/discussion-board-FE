import React from 'react';
import { toggleDrawer } from './';
import { Icon, IconButton } from '@material-ui/core';
import { useGlobal } from 'reactn';

export default () => {

  const [drawerState, setDrawerState] = useGlobal('drawerState');

  const toggleDrawer = (open, e) => {
    setDrawerState(open)
  }

  return (
    <IconButton onClick={(e) => toggleDrawer(true, e)} >
      <Icon>menu</Icon>
    </IconButton>
  )
}