import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Button, Card, TextField, Container } from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
  let {token} = await this.props.stripe.createToken();
  console.log(token);

    axios(
      {
        method: 'post',
        url: `http://127.0.0.1:8000/api/payment/`,
        withCredentials: true,
        headers: {
          //'Authorization': 'Bearer ' + localStorage.getItem('LAMBDA_FORUM_AUTH_TOKEN'),
          'Authorization': 'Token ' + '5141e0976c89617c73d220a2aab647099dacad97',
        },
        data: {
          stripetoken: token.id,
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
}

  render() {
    return (
      <Card className={this.props.classes.card}>
        <h3>Premium User Payment</h3>
        <TextField
          id="outlined-fname"
          label="First Name"
          variant="outlined"
          className={this.props.classes.inputsWidth} />
        <TextField
          id="outlined-lname"
          label="Last Name"
          variant="outlined"
          className={this.props.classes.inputsWidth}/>
        <TextField
          id="outlined-email"
          label="Email"
          variant="outlined"
          className={this.props.classes.inputsWidth}/>
        <CardElement className={this.props.classes.inputsWidth}/>
        <Button
          variant="contained"
          color="primary"
          onClick={this.submit}
          className={this.props.classes.inputsWidth}>Submit Payment<AttachMoney />
        </Button>
      </Card>
    );
  }
}

export default injectStripe(CheckoutForm);
