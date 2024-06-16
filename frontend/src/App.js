// src/App.js
import React, { useState } from 'react';
import Auth from './components/Auth';
import './App.css';
import './auth.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Auth onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome to the Dashboard</h1>
          <p>You are logged in as {user.fname} {user.lname}!</p>
          {/* You can add more components or features for authenticated users here */}
        </div>
      )}
    </div>
  );
};

export default App;