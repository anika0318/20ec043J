// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [companyName, setCompanyName] = useState('');
  const [registrationToken, setRegistrationToken] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://20.244.56.144/train/register', {
        company: companyName,
      });
      setRegistrationToken(response.data.token);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Company Registration</h2>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />
        <button type="submit">Register</button>
      </form>
      {registrationToken && (
        <div>
          <h3>Registration Token:</h3>
          <p>{registrationToken}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
