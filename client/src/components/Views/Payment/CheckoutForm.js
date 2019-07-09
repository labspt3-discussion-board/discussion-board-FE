import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
  let {token} = await this.props.stripe.createToken();
  console.log(token);

  // axios
  //   .post('http://127.0.0.1:8000/api/payment/', token)
  //   .then(res => {
  //     console.log(token);
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

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
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
