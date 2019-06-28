import React from 'react';
import Button from '@material-ui/core/Button'

export default props => {
  return (
    <>
      <Button 
        className = {props.classes.signShared}
        onClick={ props.handleLoginModal }
      >
        Sign In
      </Button>
    </>
  )
}