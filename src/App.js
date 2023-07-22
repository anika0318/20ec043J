
import React, { useState } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import TrainSchedule from './TrainSchedule';

function App() {
  const [authToken, setAuthToken] = useState('');

  const handleAuthentication = async () => {
    try {
      const response = await axios.post('http://20.244.56.144/train/auth/', {
        token: authToken,
      });
      setAuthToken(response.data.token);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div>
      {!authToken ? (
        <RegistrationForm onRegister={handleAuthentication} />
      ) : (
        <TrainSchedule authToken={authToken} />
      )}
    </div>
  );
}

export default App;



