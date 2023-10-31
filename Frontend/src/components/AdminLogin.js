import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const AdminLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(''); // Declare generatedOtp and setGeneratedOtp
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleGenerateOtp = () => {
    // Generate a random six-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);

    // Show the OTP as a notification
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        showNotification(generatedOtp);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            showNotification(generatedOtp);
          }
        });
      }
    }

    setGeneratedOtp(generatedOtp.toString()); // Store generatedOtp in state as a string
  };

  const showNotification = (otp) => {
    const notification = new Notification('Generated OTP', {
      body: `Your OTP is ${otp}`,
    });
  };

  const handleLogin = () => {
    if (otp === generatedOtp) {
      setIsLoggedIn(true);
      navigate('/managecourse');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <Container className="login-container">
      <h2 className="text-center mb-4">Login</h2>
      {!isLoggedIn ? (
        <Form>
          <FormGroup>
            <Label for="phoneNumber">Enter Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" className="mb-3" onClick={handleGenerateOtp}>
            Generate OTP
          </Button>
          <FormGroup>
            <Label for="otp">Enter OTP</Label>
            <Input
              type="text"
              name="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </FormGroup>
          <Button color="success" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      ) : (
        <p className="text-center mt-3">You are logged in!</p>
        
        
      )}
    </Container>
  );
};

export default AdminLogin;
