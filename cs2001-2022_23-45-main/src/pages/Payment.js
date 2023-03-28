import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Donation.css';

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 700px;
`;

const PaymentInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  font-family: inherit;
  color: black;
  background-color: #f5f5f5;

  &:focus {
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PaymentLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: normal;
  color: white;
  text-transform: none;
`;

const PaymentButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

function Payment() {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const intialState = { fullName: "", cardNumber: "", expiryDate: "", cvv: "" };
  const [validationError, setValidationError] = useState(intialState);
  const navigate = useNavigate()

  const handleFullNameChange = (e) => {
    setValidationError(intialState);
    setFullName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setValidationError(intialState);
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setValidationError(intialState);
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setValidationError(intialState);
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError(intialState);
    if (fullName.split(" ").length < 2) {
      console.log("fullname");
      setValidationError({
        ...validationError,
        fullName:
          "Please enter forename and last name",
      });
    } else if (cardNumber.length > 16 || cardNumber.length < 16) {
      console.log(cardNumber.length);
      setValidationError({
        ...validationError,
        cardNumber: "Card number must be 16 numbers long.",
      });
    } else if (parseInt(expiryDate.split("/")[1]) < 23) {
      console.log("expiry");
      setValidationError({
        ...validationError,
        expiryDate: "Enter valid expiry date",
      });
    } else if (cvv.length > 3) {
      setValidationError({
        ...validationError,
        cvv: "CVV must be 3 numbers",
      });
    } else {
      axios
        .post("http://localhost:8082/api/save/payment", {
           
            total: parseInt(location.state),
            fullName,
            cardNumber,
            expiryDate,
            cvv: parseInt(cvv),
            id:0
          },
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Payment made successfully")
            navigate("/")
          }
        }).catch(error => {alert(error.message)})
    }
    // TODO: handle payment processing logic here
  };
    
  const location = useLocation();

  return (
    <>
    <h1 style={{ color: 'white', textAlign: 'center' }}>
      Enter Payment Details
      </h1>
      <PaymentForm onSubmit={handleSubmit}>
      <PaymentLabel>
        Total
        <PaymentInput 
        type="text" 
        value={location.state} 
        placeholder="{location.state}" 
        readonly 
        />
      </PaymentLabel>
      <PaymentLabel>
        Full Name
        <PaymentInput 
        type="text" 
        className={validationError.fullName ? "error-style" : ""}
        value={fullName} 
        onChange={handleFullNameChange} 
        placeholder="Enter full name"
         />
         {validationError.fullName ? (
            <div>{validationError.fullName}</div>
          ) : null}
      </PaymentLabel>
      <PaymentLabel>
        Card Number
        <PaymentInput 
        type="number" 
        value={cardNumber} 
        onChange={handleCardNumberChange} 
        placeholder="Enter card number" 
        />
        {validationError.cardNumber ? (
            <div>{validationError.cardNumber}</div>
          ) : null}
      </PaymentLabel>
      <PaymentLabel>
        Expiry Date
        <PaymentInput 
        type="text" 
        value={expiryDate}
        required
        onChange={handleExpiryDateChange} 
        placeholder="MM/YY" 
        />
        {validationError.expiryDate ? (
            <div>{validationError.expiryDate}</div>
          ) : null}
      </PaymentLabel>
      <PaymentLabel>
        CVV
        <PaymentInput 
        type="text" 
        value={cvv} 
        onChange={handleCvvChange} 
        placeholder="Enter CVV"
        pattern="\d{3}"
        required
        maxLength="3"
         />
         {validationError.cvv ? <div>{validationError.cvv}</div> : null}
      </PaymentLabel>
      <PaymentButton type="submit">Pay Now</PaymentButton>
    </PaymentForm>
    </>
  );
}

export default Payment;