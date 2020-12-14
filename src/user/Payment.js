import { useStyles } from './styles';
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Alert from '@material-ui/lab/Alert';
import { fetch, useFetch } from '../core/fetch';

export const Payment = (props) => {
  console.log(props);
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const [product] = React.useState({
    name: 'Translation',
    price: props.price,
  });
  // setProduct({
  //   name: 'Translation',
  //   price: props.price,
  // });
  async function handleToken(token, addresses) {
    const data = { token, product };
    const response = await fetch({
      url: '/api/user/checkout',
      method: 'post',
      body: data,
    });
    console.log('Response:', response);
    if (response === 'success') {
      setAlertMessage({ message: 'Success! Check email for details', type: 'success' });
      setShowAlert(true);
      window.location.pathname = `/app/myOrders`;
    } else {
      setAlertMessage({ message: 'Something went wrong', type: 'error' });
      setShowAlert(true);
    }
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>Total Price: ${product.price}</h3>
      </div>
      {showAlert && <Alert severity={alertMessage.type}>{alertMessage.message}</Alert>}
      <StripeCheckout
        stripeKey="pk_test_51HGUvrDOqWcprKpuPB7mjHMXK9ecsAjBIIXmRzZG6fVsT2OmRbGNAOkMRTjCSGv3xzruZHrNukXsi1Ie5e8FS7HU00PYo5KVVr"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
        className={classes.stripeButton}
      />
    </div>
  );
};
