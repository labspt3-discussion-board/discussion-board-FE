import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default () => {
  return (
    <StripeProvider apiKey="pk_test_CsqXg9uXm2XHTPYcUHVv5ORS003ZD13mbk">
      <div className="example">
        <h1>React Stripe Elements Example</h1>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  )
}
