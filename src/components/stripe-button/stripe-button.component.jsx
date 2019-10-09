import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_kvLYA12KHorL24g3aTjLu4oc00SFcodPaA';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
        label='Pay Now'
        name='PauZ Cloth Co.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        />
    );
};

export default StripeCheckoutButton;