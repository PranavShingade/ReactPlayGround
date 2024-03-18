import React from "react";
import { Button } from "react-bootstrap";
import { useState } from 'react';
// import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const LoginOption = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'phone') {
      console.log('Logging in with phone number:', phoneNumber);
      // Implement your login logic here
    } else if (selectedOption === 'email') {
      console.log('Logging in with email:', email);
      // Implement your login logic here
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login With</h2>
      <div className="options-container">
        <label>
          <input
            type="radio"
            value="whatsapp"
            checked={selectedOption === 'whatsapp'}
            onChange={handleOptionChange}
          />
          {/* <FaWhatsapp /> */}
          <Button>WhatsApp</Button>
        </label>
        <label>
          <input
            type="radio"
            value="phone"
            checked={selectedOption === 'phone'}
            onChange={handleOptionChange}
          />
          {/* <FaPhone /> */}
          <Button>Phone Number</Button>
        </label>
        <label>
          <input
            type="radio"
            value="email"
            checked={selectedOption === 'email'}
            onChange={handleOptionChange}
          />
          {/* <FaEnvelope /> */}
          <Button>Email</Button>
        </label>
      </div>
      {selectedOption === 'phone' && (
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      )}
      {selectedOption === 'email' && (
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      )}
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginOption