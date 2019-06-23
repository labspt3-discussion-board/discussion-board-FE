import React from 'react';
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

export default props => {
  return (
    <NavLink to='/register/' style={{ textDecoration: 'none', }}>
      <Button className = {props.classes.signShared}>
        Sign Up
      </Button>
    </NavLink>
  )
}