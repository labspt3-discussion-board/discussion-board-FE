import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import { withStyles } from '@material-ui/core';
import { styles } from './Payment.style'
import CheckoutForm from './CheckoutForm';

export default withStyles(styles)(props => {

  const { classes } = props;

  return (
    <StripeProvider apiKey="pk_test_CsqXg9uXm2XHTPYcUHVv5ORS003ZD13mbk">
      <div>
        <Elements>
          <CheckoutForm classes={classes}/>
        </Elements>
      </div>
    </StripeProvider>
  )
})
