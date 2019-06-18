import React from 'react';
import {
  withStyles, Grid, Typography, Avatar, Button, Card,
  CardMedia
} from '@material-ui/core';
import { styles } from './DiscussionPage.style';
import logo from '../../../Assets/images/logo.png';

export default withStyles(styles)(props => {

  const { classes } = props;

  return (
    <Grid className={classes.container} container>
      <Grid className={classes.header} container>
        <Typography variant="h4">Original Discussion Title</Typography>
        <Button variant="contained">Edit</Button>
      </Grid>
      <Grid className={classes.userInfo} container>
        <Avatar className={classes.userAvatar} src={logo} alt="user avatar" />
        <Typography>Username - 01/01/20</Typography>
      </Grid>
      <Grid className={classes.body} container>
        <Typography className={classes.bodyText} >loem ipsum lorem ipdsusaljlskadjlasjfl;kasflnsadjnasfkjnafsnsadfdfjnasdfkjkljsfnkjsflanlkjasfnkjsfankjlsankljfsn
          laskfj;lfsdkjlasfkmklf;asmsalkfd;nlfas;dknfaksdlnl;afksddnfaslk;dnajsn;lkanfaskdl;nfsdadkl;nasdfkl;nfsakl;nsafdl;kndsfakl;
        </Typography>
      </Grid>
      <Grid className={classes.comments} container>
        {/* Going to map over an array of objs that contain user info 
        and their comments and produce a card*/}
        <Typography className={classes.commentsTitle} variant="h5">Comments</Typography>
        <Card className={classes.commentCard} raised>
          <CardMedia
            className={props.classes.commentImg}
            image={logo}
            title="comment user logo"
          />
          <Typography>Username 01/02/20</Typography>
        </Card>
      </Grid>
    </Grid>
  )
})