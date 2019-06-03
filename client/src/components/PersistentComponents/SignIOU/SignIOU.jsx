import React from 'react';
import SignIn from '../SignIOU/SignIn/SignIn';
import SignUp from '../SignIOU/SignUp/SignUp';

export default props => {
  const {classes} = props;
  return (
    <div className={classes.signContainer}>
      <SignUp classes={classes}/>
      <SignIn classes={classes}/>
    </div>
  )
}