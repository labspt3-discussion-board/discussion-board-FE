import React from 'react';
import { useGlobal } from 'reactn'
import { Drawer } from '@material-ui/core';
import {
  withStyles, SwipeableDrawer, List,
  ListItem, Button, Divider,
} from '@material-ui/core';
import { styles } from './Drawer.style.js';


export default withStyles(styles)(props => {

  const { classes } = props;
  const [drawerState, setDrawerState] = useGlobal('drawerState');

  const toggleDrawer = (open, e) => {
    setDrawerState(open)
  }

  // const handleView = () => {
  //   props.history.push(`/f/${1}/`)
  // }

  return (
    <SwipeableDrawer
      open={drawerState}
      onClose={(e) => toggleDrawer(false, e)}
      onOpen={(e) => toggleDrawer(true, e)}
      className={classes.drawer}>

      <List onClick={(e) => toggleDrawer(false, e)}>
        <ListItem>
          {/* <Button onClick={handleView}> */}
          <Button>
            SubForums
              </Button>
        </ListItem>
        <Divider />
        <ListItem>
          <Button>
            Create SubForums
              </Button>
        </ListItem>
      </List>

    </SwipeableDrawer>
  )
})
