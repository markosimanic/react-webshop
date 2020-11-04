import React from 'react' 
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hjl3RGWOyoJpErGpUaD9viG3GoBLzr2PM0MpW9O8Cp3nSjHinLIR3UmjcRqLLdjw54AwA8IXS4fG9CejYxcObSi00NbkcnX3B'
    const onToken = token => {
        console.log(token)
        alert('payment successfull')
    }
    return(
        <StripeCheckout label='Pay Now' 
                        name='CRWN Clothing Ltd.' 
                        billingAddress
                        shippingAddress 
                        image='https://svgshare.com/i/CUz.svg'
                        description = {`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey} />
    )

}
  
export default StripeCheckoutButton;
