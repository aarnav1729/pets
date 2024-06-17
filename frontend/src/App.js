// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Profile from './components/Profile';
import './App.css';
import './auth.css';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Auth onLogin={handleLogin} /> : <Profile user={user} onLogout={handleLogout} />}
          />
          <Route
            path="/profile"
            element={<Profile user={user} onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
