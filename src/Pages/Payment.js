import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'
import ScreenImage from '../Images/ss.png'
// import {AiFillStar} from 'react-icons'
import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51IDG9rIUDWGSgLgAWdiOCdfkTqM0QQxhWPrGRRTrSTN8Bqp1CPTUc1mS65hrHR8lPVcvqw6yoykZyMFAAMg1Zad000GbQo3sUW");

const Index = () => {
  return(
<div className='Payment'>
<div className='HeaderTextPayment'></div>
<Elements stripe={stripePromise}>
    <Form />
  </Elements>
</div>
  )
}
export default Index

const Form =()=>{
  const stripe = useStripe()
  const elements = useElements()
  const HandleSubmit = async (event) =>{
    event.preventDefault()
    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type:"card",
      card:elements.getElement(CardElement)
    })
    if(!error){
      const {id} = paymentMethod;
      try{
        axios.post('http://localhost:5000/payment',{
          id
        })
      }
      catch(error){
        console.log('error');
      }
    }
    else{
      console.log('error');
    }
  }
  return <form className='FromWrap' onSubmit={HandleSubmit}>
  <div>
    <img className='SImage' src={ScreenImage} alt='Porosh' />
  </div>
    <fieldset className="FormGroup">
    {/* <p className='labelText'>First Name : </p> */}
    <input className='CustomForm' type='name' placeholder=' First Name : '></input>
    {/* <p className='labelText'>Last Name : </p> */}
    <input className='CustomForm' type='name' placeholder=' Last Name : '></input>
    {/* <p className='labelText'>Card Details : </p> */}
    <div className="FormRow">
      <CardElement value={'5300'} options={CARD_OPTIONS} onChange={onChange}/>
    </div>
  </fieldset>
    <button className='VerifyBtn' type='submit' disabled={!stripe}>Verify your Account</button>
  <p className='labelText'>By Continuing you are agreed with I would like to subscribe to an additional browser games bundle with a fourteen day trial period for $ 1.95, which automatically continues into a recurring monthly subscription of $ 4.95/month charged to my credit card, unless terminated during the trial period. I understand and accept the terms and conditions of the browser games bundle.</p>
  </form>
}
const onChange = (event) =>{
  console.log(event)
}
const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#343a40',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: '#fce883'},
      '::placeholder': {color: '#aaa'},
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};